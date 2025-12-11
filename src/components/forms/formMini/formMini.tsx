"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Mensaje enviado!");
          formRef.current?.reset();
        },
        (err) => {
          console.error(err);
          alert("Error al enviar el mensaje.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <input name="user_name" placeholder="Nombre" required />
      <input name="user_email" placeholder="Email" type="email" required />
      <textarea name="message" placeholder="Mensaje" required />
      <button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
