"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xqabwwpn");
  if (state.succeeded) {
    return (
      <section className="py-8 px-4 mx-auto max-w-screen-md text-white">
        <p className="text-green-400 text-center text-lg font-semibold">Thanks for contacting us!</p>
      </section>
    );
  }
  return (
    <section className="py-8 px-4 mx-auto max-w-screen-md text-white">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Fill Your Details</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400 transition-all duration-300 ease-in-out hover:border-blue-500 focus:scale-105"
            placeholder="Enter your name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400 transition-all duration-300 ease-in-out hover:border-blue-500 focus:scale-105"
            placeholder="Enter your email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg shadow-sm border border-gray-600 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 transition-all duration-300 ease-in-out hover:border-blue-500 focus:scale-105"
            placeholder="Leave your message here..."
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 disabled:opacity-60"
        >
          {state.submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;

