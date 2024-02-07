import React from "react";
import ContactCard from "./component/ContactCard";
import ContactForm from "./component/ContactForm";
import YandexMap from "./component/Map";

function Contact() {
  return (
    <div id="contact" className="contact">
      <YandexMap />
      <ContactCard />
      <ContactForm />

    </div>
  );
}

export default Contact;
