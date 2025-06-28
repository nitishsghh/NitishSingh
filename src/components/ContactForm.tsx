// 'use client';

// import React, { useState } from 'react';

// const ContactForm: React.FC = () => {
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [remarks, setRemarks] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     setError('');
//     setSubmitted(false);

//     if (!name.trim() || !mobile.trim() || !remarks.trim()) {
//       setError('All fields are required.');
//       return;
//     }

//     // Basic mobile number validation (e.g., 10 digits)
//     if (!/^\d{10}$/.test(mobile.trim())) {
//       setError('Please enter a valid 10-digit mobile number.');
//       return;
//     }

//     const message = `Name: ${name}\nMobile: ${mobile}\nRemarks: ${remarks}`;
//     const telegramUser = 'Itsnitishsingh';
//     // Note: Telegram's ?text= parameter has limitations on length and special characters.
//     // For more robust solutions, a backend and a Telegram bot API would be needed.
//     const telegramUrl = `https://t.me/${telegramUser}?text=${encodeURIComponent(message)}`;

//     // Open in new tab
//     window.open(telegramUrl, '_blank');
    
//     setSubmitted(true);
//     // Optionally clear the form
//     // setName('');
//     // setMobile('');
//     // setRemarks('');

//     // You might want to show a success message or redirect the user
//     // For now, we just set a submitted flag.
//   };

//   return (
//     <section className="py-8 px-4 mx-auto max-w-screen-md text-white">
//       <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Fill Your Deatils .</h2>
//       <form onSubmit={handleSubmit} className="space-y-8">
//         <div>
//           <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400 transition-all duration-300 ease-in-out hover:border-blue-500 focus:scale-105"
//             placeholder="Enter Your Name Here"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-300">Mobile Number</label>
//           <input
//             type="tel"
//             id="mobile"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400 transition-all duration-300 ease-in-out hover:border-blue-500 focus:scale-105"
//             placeholder="Mobile No."
//             pattern="\d{10}"
//             title="Please enter a 10-digit mobile number"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="remarks" className="block mb-2 text-sm font-medium text-gray-300">Remarks</label>
//           <textarea
//             id="remarks"
//             rows={6}
//             value={remarks}
//             onChange={(e) => setRemarks(e.target.value)}
//             className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg shadow-sm border border-gray-600 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 transition-all duration-300 ease-in-out hover:border-blue-500 focus:scale-105"
//             placeholder="Leave your remarks here..."
//             required
//           ></textarea>
//         </div>
//         {error && <p className="text-sm text-red-400">{error}</p>}
//         {submitted && <p className="text-sm text-green-400">Form submitted! Check Telegram to send your message.</p>}
//         <button
//           type="submit"
//           className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
//         >
//           Send message via Telegram
//         </button>
//       </form>
//     </section>
//   );
// };

// export default ContactForm;

'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xqabwwpn");

  if (state.succeeded) {
    return (
      <section className="py-8 px-4 mx-auto max-w-screen-md text-white">
        <div className="text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Thank You!</h2>
          <p className="text-lg text-green-400">Your message has been sent successfully.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 px-4 mx-auto max-w-screen-md text-white">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-12 font-light text-center text-gray-400 sm:text-xl">Have a question or want to work together? Send us a message.</p>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400 transition-all duration-300 ease-in-out hover:border-blue-500 focus:scale-105"
            placeholder="Enter Your Name Here"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-red-400" />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400 transition-all duration-300 ease-in-out hover:border-blue-500 focus:scale-105"
            placeholder="your.email@example.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-red-400" />
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg shadow-sm border border-gray-600 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 transition-all duration-300 ease-in-out hover:border-blue-500 focus:scale-105"
            placeholder="Leave your message here..."
            required
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-red-400" />
        </div>
        
        <button
          type="submit"
          disabled={state.submitting}
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
