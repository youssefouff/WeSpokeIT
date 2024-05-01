import React, { useState } from 'react';


const IntroText = () => {
  return (
    <div className="w-1/2 p-4 mt-40">
      <p className="text-5xl sm:text-xl lg:text-5xl font-semibold mb-4 bg-gradient-to-r from-green-400 to-green-900 text-transparent bg-clip-text">Need any support?</p>
      <p className="text-gray-400 mb-4 sm:text-sm">
        Get in touch with us by writing your inquiry and we will reach you
        <br></br>or directly send an email to <span className="font-semibold">inquiry@wespokeit.com</span>.
      </p>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    countryCode: '',
    phoneNumber: '',
    inquiry: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          country: '',
          countryCode: '',
          phoneNumber: '',
          inquiry: ''
        });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
  };


  return (
    <div className="flex justify-between mt-10" id="contact">
      <IntroText />
      <div className="w-1/2 p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white-200 text-sm font-bold mb-2">Name : </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent shadow appearance-none border rounded w-full py-3 px-1 text-white-300 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white-200 text-sm font-bold mb-2">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-white-200 text-sm font-bold mb-2">Country : </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-white-200 text-sm font-bold mb-2">Phone Number :</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="inquiry" className="block text-white-200 text-sm font-bold mb-2">Inquiry :</label>
            <textarea
              id="inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            ></textarea>
          </div>
          <button type="submit" className="bg-gradient-to-r from-green-500 to-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
