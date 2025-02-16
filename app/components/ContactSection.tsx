'use client';
import { useState } from 'react';

const ContactSection = () => {
  // Manage the state for each form field
  const [formData, setFormData] = useState({
    name: '',
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle changes in each form input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Normally you would send the form data to a backend here
    console.log('Form submitted with the following data:', formData);

    // You can reset the form after submission if needed
    setFormData({
      name: '',
      fullName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="space-y-4 w-[50%] items-center justify-center">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block">Full Name:</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block">Phone Number:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block">Message:</label>
          <textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="border p-2 w-full"
            rows={4}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
