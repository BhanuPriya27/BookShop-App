import React from "react";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";

function Contact() {
  return (
    <div className="w-screen flex items-center justify-center flex-col ">
      <Navbar />
      <div className="dark:bg-black dark:text-white max-w-screen-lg flex items-center justify-center flex-col">
        <ContactUs />
      </div>
    </div>
  );
}

export default Contact;
