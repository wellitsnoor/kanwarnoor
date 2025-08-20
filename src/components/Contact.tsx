"use client";

import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    error: false,
    errorMessage: "",
    success: false,
    loading: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({ ...form, error: false, loading: true });

    try {
      const res = await axios.post("/api/send", {
        name: form.name,
        email: form.email,
        message: form.message,
      });
    } catch (error) {
      let errorMessage = "Something went wrong";
      
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      setForm({
        ...form,
        error: true,
        loading: false,
        errorMessage,
      });
      return;
    }

    setForm({
      ...form,
      name: "",
      email: "",
      message: "",
      error: false,
      success: true,
      loading: false,
      errorMessage: "",
    });
  };

  return (
    // simple contact form
    <>
      <div className="flex w-full h-full flex-col items-center justify-center relative">
        {form.success ? (
          <>
            <div className="flex flex-row relative">
              {Array.from(`Success!`).map((letter, index) => {
                return (
                  <motion.p
                    key={index}
                    initial={{
                      opacity: 0,
                      filter: "blur(20px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="text-7xl font-bold flex"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.p>
                );
              })}
            </div>
            <p className="text-xl w-1/2 mt-3 text-center">
              Your message has been sent successfully. I'll get back to you as
              soon as possible.
            </p>

            <div className="  absolute bottom-0 mb-10 flex flex-col items-center justify-center">
              <p className="text-2xl font-bold">Other ways to connect :-</p>
              <div className="flex flex-row gap-5">
                <a
                  href="https://www.linkedin.com/in/wellitsnoor/"
                  target="_blank"
                >
                  Linkedin
                </a>
                <a href="https://instagram.com/wellitsnoor" target="_blank">
                  Instagram
                </a>
                <a href="mailto:wellitsnoor@gmail.com" target="_blank">
                  wellitsnoor@gmail.com
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row">
              {Array.from(`Connect with me`).map((letter, index) => {
                return (
                  <motion.p
                    key={index}
                    initial={{
                      opacity: 0,
                      filter: "blur(20px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="text-7xl font-bold flex"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.p>
                );
              })}
            </div>
            <p className="text-xl w-1/2 mt-3 text-center">
              I'm always looking for new opportunities and collaborations. If
              you have any questions or want to work together, please feel free
              to contact me.
            </p>

            <div className="flex w-full flex-col items-center justify-center gap-20">
              <div className="w-1/2 flex justify-center items-center mt-20">
                <form
                  className="flex flex-col w-1/2 gap-2"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                      className="bg-transparent border-2 px-3 py-2 border-black text-black"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                      className="bg-transparent border-2 px-3 py-2 border-black text-black"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      required
                      className="px-3 py-2 border-2 border-black text-black resize-y max-h-36"
                    ></textarea>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    {form.loading ? (
                      <Button
                        type="primary"
                        loading={true}
                        theme="light"
                        text="Sending"
                        link="#"
                      />
                    ) : form.success ? (
                      <Button type="primary" theme="light" text="Success" />
                    ) : (
                      <button
                        type="submit"
                        className="w-full flex justify-center items-center"
                      >
                        <Button type="primary" theme="light" text="Send" />
                      </button>
                    )}
                  </div>
                  {form.error && (
                    <p className="text-red-500 flex justify-center items-center">
                      {form.errorMessage || "Something went wrong"}
                    </p>
                  )}
                </form>
              </div>

              <div className="flex flex-col items-center justify-center w-1/2">
                <p className="text-2xl font-bold">Other ways to connect :-</p>
                <div className="flex flex-row gap-5">
                  <a
                    href="https://www.linkedin.com/in/wellitsnoor/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                  <a href="https://instagram.com/wellitsnoor" target="_blank">
                    Instagram
                  </a>
                  <a href="mailto:wellitsnoor@gmail.com" target="_blank">
                    wellitsnoor@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
