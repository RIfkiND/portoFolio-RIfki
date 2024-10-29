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

      console.log('Response:', response);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      const data = await response.json();
      setStatus(data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred while sending the message.');
    }
  };

  return (
    <section id="contact" className="mt-24 w-full">
      <div className="max-w-5xl mx-auto">
        {/* Combined Contact Info and Form */}
        <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6 flex flex-col lg:flex-row">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-center lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg">📞 +123 456 7890</p> {/* Replace with your number */}
            <p className="text-lg">📧 your.email@example.com</p> {/* Replace with your email */}
          </div>

          {/* Right Column - Form */}
          <form className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg lg:w-2/3" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
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
                name="email"
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
                name="message"
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
            {status && <p className="text-center text-red-500">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
