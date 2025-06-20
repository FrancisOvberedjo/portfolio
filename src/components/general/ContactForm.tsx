'use client';

export default function ContactForm() {
  return (
    <form className="bg-gray-100 p-6 rounded-lg space-y-10 md:space-y-15">
      {/* First + Last Name */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="block text-sm text-gray-600 mb-1">First Name</label>
          <input
            type="text"
            className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black"
            placeholder="Enter first name"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm text-gray-600 mb-1">Last Name</label>
          <input
            type="text"
            className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black"
            placeholder="Enter last name"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Email</label>
        <input
          type="email"
          className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black"
          placeholder="you@example.com"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Message</label>
        <textarea
          rows={4}
          className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black resize-none"
          placeholder="Write your message here..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-black text-white rounded-full px-6 py-2 text-sm"
      >
        Send Message
      </button>
    </form>
  );
}
