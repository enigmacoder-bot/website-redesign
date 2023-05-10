import React from "react";
import emailjs from "emailjs-com";
import "../index.css";
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_mq7j6xu",
      "template_90o4fg8",
      e.target,
      "279puq9EagyRTrmXH"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
};

function Form(props) {
  return (
    <section className="px-4 py-10 md:py-20 bg-gray-100">
      <div className="text-4xl font-bold text-center">
        LET’S TALK. BUT YOU FIRST...
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <form onSubmit={sendEmail} className="flex flex-col space-y-4">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="border border-gray-300 rounded-md py-2 px-3"
            />

            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="border border-gray-300 rounded-md py-2 px-3"
            />

            <label htmlFor="phno" className="font-semibold">
              Phone Number
            </label>
            <input
              id="phno"
              name="phno"
              type="phone"
              pattern="[0-9]{10}"
              className="border border-gray-300 rounded-md py-2 px-3"
            />

            <label htmlFor="message" className="font-semibold">
              Leave a Message
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-300 rounded-md py-2 px-3"
            />

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./images/contact.png" alt="" className="w-64" />
          <div className="font-semibold text-lg mt-4">Contact Info</div>
          <div className="text-gray-700">
            prafalagro@yahoo.in<br></br>+91 6361348200
          </div>
          <div className="font-semibold text-lg mt-4">Office Address</div>
          <div className="text-gray-700">
            ​​Nain Center, Sahydri College of Engineering, Adyar Managlore,
            575007​​
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
