import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(''); 

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Log response for debugging
      console.log('Response:', response);

      // Check if the response is ok
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      const data = await response.json(); // Move this after checking response.ok

      setStatus(data.message); // Assuming your API returns a success message
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred while sending the message.');
    }
  };

  return (
    <section id="contact" className="mt-24 w-full">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <form className="max-w-lg mx-auto bg-white dark:bg-neutral-700 p-8 rounded-lg shadow-lg space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name" // Add name attribute
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email" // Add name attribute
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
          <textarea
            id="message"
            name="message" // Add name attribute
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-opacity-90"
        >
          Send Message
        </button>
        {status && <p className="text-center text-red-500">{status}</p>} {/* Show status message */}
      </form>
    </section>
  );
}
