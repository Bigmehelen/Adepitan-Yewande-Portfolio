import React, { useState } from 'react'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "6495d23c-46b6-4387-bb3e-5d67b277e67b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Successfully Sent!" : "Error. Try again.");
  };

  return (
    <section id="contact" className="w-full py-32 px-6 lg:px-[8%] bg-luxury-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* Left: Content */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-luxury-gray">Interaction</h4>
            <h2 className="text-6xl md:text-8xl text-luxury-black tracking-tighter leading-none">
              Let's <br />
              <span className="italic font-normal">Connect</span>
            </h2>
          </div>

          <div className="space-y-8 max-w-md">
            <p className="text-xl text-luxury-gray leading-relaxed font-medium">
              I am currently available for new projects and collaborations. If you have an idea, let's bring it to life.
            </p>
            <div className="space-y-2">
              <h5 className="text-xs uppercase tracking-widest font-bold text-luxury-black">Direct Email</h5>
              <a href="mailto:wandebronze@gmail.com" className="text-2xl font-serif text-luxury-black hover:italic transition-all">
                wandebronze@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white p-12 lg:p-16 rounded-3xl border border-luxury-black/5 shadow-sm">
          <form onSubmit={onSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-gray">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-transparent border-b border-luxury-black/10 py-4 outline-none focus:border-luxury-black transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-gray">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-transparent border-b border-luxury-black/10 py-4 outline-none focus:border-luxury-black transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-gray">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="I'd like to talk about..."
                required
                className="w-full bg-transparent border-b border-luxury-black/10 py-4 outline-none focus:border-luxury-black transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-6 bg-luxury-black text-white font-bold uppercase tracking-widest text-xs hover:bg-luxury-black/90 transition-all rounded-full"
            >
              Send Message
            </button>

            {result && (
              <p className="text-center text-xs font-bold uppercase tracking-widest text-luxury-gray">
                {result}
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact
