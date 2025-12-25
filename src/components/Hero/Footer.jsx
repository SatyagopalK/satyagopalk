import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
      <section className="mt-24 bg-[#002B5B] text-white p-10 md:p-16 rounded-lg shadow-xl relative overflow-hidden">

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-serif font-bold mb-4 text-[#FFD666]">
              Let’s Connect
            </h2>

            <p className="text-blue-100 text-lg mb-6">
              I love exchanging ideas, exploring new perspectives, and collaborating on research-driven projects. Guided by curiosity, I enjoy experimenting, learning through hands-on exploration, and discussing experiments, machine learning concepts, or research papers. I’m always happy to connect with fellow students, researchers, and professionals — because thoughtful conversations often lead to new insights and meaningful collaborations.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6 items-center">
              <a
                  href="http://www.linkedin.com/in/satyagopal-kodukula-8840bb217"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-full bg-white/10 text-[#FFD666] text-2xl
                         hover:bg-[#FFD666] hover:text-[#002B5B]
                         hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                  href="https://github.com/SatyagopalK"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-full bg-white/10 text-[#FFD666] text-2xl
                         hover:bg-[#FFD666] hover:text-[#002B5B]
                         hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=kodukulasatyagopal@gmail.com&su=Lets%20Connect&body=Hi%20Omkar,%0A%0AI%20would%20love%20to%20connect%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="p-3 rounded-full bg-white/10 text-[#FFD666] text-2xl
             hover:bg-[#FFD666] hover:text-[#002B5B]
             hover:scale-110 transition"
              >
                <FaEnvelope />
              </a>


            </div>
          </div>

          {/* FORMSPREE FORM */}
          <form
              action="https://formspree.io/f/xvgenyyq"
              method="POST"
              className="space-y-4"
          >
            {/* hidden config */}
            <input type="hidden" name="_subject" value="New Message 🚀" />
            <input type="text" name="_gotcha" className="hidden" />

            <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full p-4 rounded text-gray-900 outline-none
                       focus:ring-2 focus:ring-[#FFD666]"
            />

            <textarea
                name="draft"
                required
                placeholder="What's on your mind?"
                rows={5}
                className="w-full p-4 rounded text-gray-900 outline-none
                       focus:ring-2 focus:ring-[#FFD666]"
            />

            <button
                type="submit"
                className="w-full bg-[#FFD666] hover:bg-[#ffcc33]
                       text-[#002B5B] font-bold py-4 rounded
                       transition uppercase tracking-widest"
            >
              Send the message
            </button>

            <p className="text-sm text-blue-100 text-center italic">
              You’ll receive a response soon. No spam. Ever.
            </p>
          </form>
        </div>

        {/* Decorative background */}
        <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white opacity-5 rounded-full"></div>
      </section>
  );
}
