"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "../../../styles/forms/comercio.module.css";

export default function FormComercios() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;

    // Helper para concatenar checkboxes en un campo único
    const concatCheckboxes = (name: string) => {
      const checkboxes = form.querySelectorAll<HTMLInputElement>(
        `input[name="${name}"]:checked`
      );
      const checked = Array.from(checkboxes)
        .map((input) => input.value)
        .join(", ");

      let hiddenInput = form.querySelector<HTMLInputElement>(
        `input[name="${name}_hidden"]`
      );
      if (!hiddenInput) {
        hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = name.replace("[]", ""); // Campo para EmailJS
        form.appendChild(hiddenInput);
      }
      hiddenInput.value = checked;
    };

    // Convertir todos los grupos de checkboxes a strings
    concatCheckboxes("rubro[]");
    concatCheckboxes("cantidad_pedidos[]");
    concatCheckboxes("tiene_delivery[]");
    concatCheckboxes("interes[]");
    concatCheckboxes("medio_contacto[]");
    concatCheckboxes("franja_horaria[]");
    concatCheckboxes("demo[]");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_B!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        form.reset();
      })
      .catch(() => {
        setError("Hubo un error, intenta nuevamente.");
        setLoading(false);
      });
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Formulario para Comercios</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* DATOS BÁSICOS */}
        <h3 className={styles.subtitle}>Datos básicos de contacto</h3>

        <input
          name="nombre_comercio"
          className={styles.input}
          placeholder="Nombre del comercio *"
          required
        />

        <input
          name="responsable"
          className={styles.input}
          placeholder="Nombre del responsable / dueño / encargado *"
          required
        />

        <input
          name="telefono"
          className={styles.input}
          placeholder="Teléfono (WhatsApp preferentemente) *"
          required
        />

        <input
          name="email"
          className={styles.input}
          placeholder="Correo electrónico (opcional)"
        />

        <input
          name="localidad"
          className={styles.input}
          placeholder="Localidad / Ciudad *"
          required
        />

        {/* DATOS COMERCIALES */}
        <h3 className={styles.subtitle}>Datos comerciales</h3>

        <div className={styles.checkboxGroup}>
          <p>Rubro / tipo de comercio:</p>
          <label>
            <input type="checkbox" name="rubro[]" value="Gastronomía" />{" "}
            Gastronomía
          </label>
          <label>
            <input type="checkbox" name="rubro[]" value="Kiosco" /> Kiosco
          </label>
          <label>
            <input type="checkbox" name="rubro[]" value="Bazar" /> Bazar
          </label>
          <label>
            <input type="checkbox" name="rubro[]" value="Farmacia" /> Farmacia
          </label>
          <label>
            <input type="checkbox" name="rubro[]" value="Librería" /> Librería
          </label>
          <label>
            <input type="checkbox" name="rubro[]" value="Indumentaria" />{" "}
            Indumentaria
          </label>
          <label>
            <input type="checkbox" name="rubro[]" value="Otros" /> Otros
          </label>
        </div>

        <div className={styles.checkboxGroup}>
          <p>Cantidad de pedidos promedio por día:</p>
          <label>
            <input type="checkbox" name="cantidad_pedidos[]" value="0-5" /> 0-5
          </label>
          <label>
            <input type="checkbox" name="cantidad_pedidos[]" value="6-15" />{" "}
            6-15
          </label>
          <label>
            <input type="checkbox" name="cantidad_pedidos[]" value="16-30" />{" "}
            16-30
          </label>
          <label>
            <input type="checkbox" name="cantidad_pedidos[]" value="+30" /> +30
          </label>
        </div>

        <div className={styles.checkboxGroup}>
          <p>Actualmente tiene delivery:</p>
          <label>
            <input type="checkbox" name="tiene_delivery[]" value="Sí" /> Sí
          </label>
          <label>
            <input type="checkbox" name="tiene_delivery[]" value="No" /> No
          </label>
          <label>
            <input type="checkbox" name="tiene_delivery[]" value="A veces" /> A
            veces
          </label>
        </div>

        {/* INTERÉS EN EL SERVICIO */}
        <h3 className={styles.subtitle}>Interés en el servicio</h3>
        <div className={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              name="interes[]"
              value="Ahorrar en comisiones"
            />{" "}
            Ahorrar en comisiones
          </label>
          <label>
            <input
              type="checkbox"
              name="interes[]"
              value="Llegar a más clientes"
            />{" "}
            Llegar a más clientes
          </label>
          <label>
            <input
              type="checkbox"
              name="interes[]"
              value="Optimizar la logística"
            />{" "}
            Optimizar la logística
          </label>
          <label>
            <input
              type="checkbox"
              name="interes[]"
              value="Tener un sistema de seguimiento"
            />{" "}
            Tener un sistema de seguimiento
          </label>
          <label>
            <input type="checkbox" name="interes[]" value="Otra" /> Otra
          </label>
        </div>

        <textarea
          name="interes_otro"
          className={styles.textarea}
          placeholder="Otra motivación o interés (opcional)"
        />

        {/* PREFERENCIAS DE CONTACTO */}
        <h3 className={styles.subtitle}>Preferencias para contacto</h3>
        <div className={styles.checkboxGroup}>
          <p>¿Cómo preferís que te contactemos?</p>
          <label>
            <input type="checkbox" name="medio_contacto[]" value="WhatsApp" />{" "}
            WhatsApp
          </label>
          <label>
            <input type="checkbox" name="medio_contacto[]" value="Teléfono" />{" "}
            Teléfono
          </label>
          <label>
            <input type="checkbox" name="medio_contacto[]" value="Email" />{" "}
            Email
          </label>
        </div>

        <div className={styles.checkboxGroup}>
          <p>¿En qué franja horaria?</p>
          <label>
            <input type="checkbox" name="franja_horaria[]" value="Mañana" />{" "}
            Mañana
          </label>
          <label>
            <input type="checkbox" name="franja_horaria[]" value="Tarde" />{" "}
            Tarde
          </label>
          <label>
            <input
              type="checkbox"
              name="franja_horaria[]"
              value="Cualquier horario"
            />{" "}
            Cualquier horario
          </label>
        </div>

        {/* PREGUNTA GANCHO */}
        <h3 className={styles.subtitle}>
          ¿Te gustaría recibir una demo gratuita o asesoría personalizada de 10
          minutos?
        </h3>
        <div className={styles.checkboxGroup}>
          <label>
            <input type="checkbox" name="demo[]" value="Sí" /> Sí, quiero
            coordinar
          </label>
          <label>
            <input type="checkbox" name="demo[]" value="No" /> No por ahora
          </label>
        </div>

        {/* BOTÓN */}
        <button className={styles.button} disabled={loading}>
          {loading ? "Enviando..." : "Enviar formulario"}
        </button>

        {sent && (
          <p className={styles.success}>Formulario enviado correctamente ✔</p>
        )}
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </section>
  );
}
