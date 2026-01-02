"use client";

import { useState } from "react";
import styles from "../../../styles/forms/contacto.module.css";

export default function FormContacto() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const form = e.currentTarget;

      const getValue = (name: string): string => {
        const el = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(
          `[name="${name}"]`
        );
        return el?.value || "";
      };

      const nombre = getValue("nombre");
      const telefono = getValue("telefono");
      const email = getValue("email");
      const consulta = getValue("consulta");

      const texto = encodeURIComponent(
        `Contacto desde la web de Puni
Nombre: ${nombre}
Teléfono: ${telefono}
Email: ${email}

Consulta:
${consulta}`
      );

      window.open(`https://wa.me/3548635151?text=${texto}`, "_blank");

      setSent(true);
      setLoading(false);
      form.reset();
    } catch (err) {
      console.error(err);
      setError("Hubo un error, intentá nuevamente.");
      setLoading(false);
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Contacto</h2>

      <p className={styles.description}>
        Por este medio te comunicás directamente con nosotros para resolver
        cualquier consulta sobre Puni.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          name="nombre"
          className={styles.input}
          placeholder="Nombre completo *"
          required
        />

        <input
          name="telefono"
          className={styles.input}
          placeholder="Teléfono (WhatsApp) *"
          required
        />

        <input
          name="email"
          type="email"
          className={styles.input}
          placeholder="Correo electrónico *"
          required
        />

        <textarea
          name="consulta"
          className={styles.textarea}
          placeholder="Escribí tu consulta *"
          rows={5}
          required
        />

        <button className={styles.button} disabled={loading}>
          {loading ? "Enviando..." : "Enviar consulta por WhatsApp"}
        </button>

        {sent && (
          <p className={styles.success}>Mensaje enviado correctamente ✔</p>
        )}

        {error && <p className={styles.error}>{error}</p>}
      </form>
    </section>
  );
}
