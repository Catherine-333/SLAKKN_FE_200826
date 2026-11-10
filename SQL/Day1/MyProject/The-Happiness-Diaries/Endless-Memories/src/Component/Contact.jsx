import { useState } from "react";

const Contact = () => {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert("Please fill all fields");
      return;
    }

    alert("Thank you for sharing your happy moments!");

    setName("");
    setMessage("");
  };

  return (
    <section className="contact-section" id="contact">

      <div className="container">

        <div className="text-center mb-4">

          <p className="section-label">SHARE YOUR THOUGHTS</p>

          <h2>Let's Create More Memories</h2>

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            className="form-control mb-3"
            placeholder="Share Your Happy Moments"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button className="btn contact-btn w-100">
            Submit
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;