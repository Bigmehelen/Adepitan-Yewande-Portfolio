import React, { useState } from 'react'

const Contact = () => {

   const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "6495d23c-46b6-4387-bb3e-5d67b277e67b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <div id="contact"
      className="w-11/12 max-w-3xl mx-auto pt-24 mt-10 text-center flex flex-col items-center gap-4">
      <h1 className="text-lg mb-2 font-Ovo"> Connect With Me </h1>

      <h3 className="font-Ovo text-3xl mb-6"> Contact </h3>

      <p className="max-w-2xl font-Ovo text-gray-700 leading-relaxed mb-10">
        I'm excited to connect with you! Whether you have a project in mind,
        want to collaborate, feel free to reach out.
        You can contact me via email at <span className="font-bold text-black"><a href="mailto:wandebronze@gmail.com">wandebronze@gmail.com</a> </span> or connect with me on LinkedIn.
      </p>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-6 mb-4 '>
            <input type="text" placeholder="Your Name" name="name" required className="border flex-1 outline-none border-gray-300 rounded-lg p-3 w-72 mb-2"/>
            <input type="email" placeholder="Your Email" name="email" required className="border flex-1 outline-none border-gray-300 rounded-lg p-3 w-72 mb-6"/>
        </div>
        <textarea placeholder="Your Message" name="message" rows='6' required className="border border-gray-300 rounded-lg p-3 w-72 h-32 mb-4"/>
        <br/>
        <button type="submit" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-200 ease-in-out"> Send Message </button>
      </form>
       <span className="mt-4">{result}</span>

    </div>
  )
}

export default Contact