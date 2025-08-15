import React from "react";

export default function Contact() {
  return (
    // simple contact form
    <div className="flex bg-red-200">
      <form action="/api/send" method="POST" className="flex flex-col">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
