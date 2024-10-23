import { Resend } from 'resend';
import { z } from 'zod';


const resend = new Resend(process.env.RESEND_API_KEY);

const EmailSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(1, { message: 'Message is required' }),
});

export  async function POST(req:Request) {
    try {
      const validatedData = EmailSchema.parse(req.body);
      const { name, email, message } = validatedData;


      await resend.emails.send({
        from: email, 
        to: process.env.MY_EMAIL as string, 
        subject: `New message from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      return Response.json({ success: true, message: 'Email sent successfully!' });   
     } catch (error) {
      if (error instanceof z.ZodError) { 
        return Response.json({ error: error.errors });
      }
      console.error('Error sending email:', error);
      return Response.json({ error: 'Error sending email' });
    
  } 
}

