# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.8.0

FROM node:${NODE_VERSION}-alpine as base

# Set the working directory inside the container.
WORKDIR /usr/src/app

# Install dependencies
FROM base as deps

# Copy only the package.json, package-lock.json, and tsconfig.json for caching.
COPY package*.json ./
COPY tsconfig.json ./

# Install both production and development dependencies.
RUN npm install

FROM deps as build

# Copy all source code.
COPY . .

ARG RESEND_API_KEY


# Build the Next.js app.
RUN npm run build

# Create a minimal production image to run the built app.
FROM base as final

# Set environment variables for production.
ENV NODE_ENV=production

# Run the application as a non-root user.
USER node

# Copy necessary files from previous stages.
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/next.config.ts ./next.config.ts

# Expose the app on port 3010.
EXPOSE 3010

# Start the application.
CMD ["npm", "run", "start"]
