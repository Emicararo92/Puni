/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "../../../styles/forms/puner.module.css";

export default function FormRepartidores() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_A!,
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
      <h2 className={styles.title}>Quiero ser un Puner</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* DATOS PERSONALES */}
        <h3 className={styles.subtitle}>Datos personales</h3>

        <input
          name="nombre"
          className={styles.input}
          placeholder="Nombre completo *"
          required
        />

        <input
          type="number"
          name="edad"
          className={styles.input}
          placeholder="Edad (mínimo 18) *"
          min="18"
          required
        />

        <input
          name="dni"
          className={styles.input}
          placeholder="DNI / CUIL (opcional)"
        />

        {/* CONTACTO */}
        <h3 className={styles.subtitle}>Datos de contacto</h3>

        <input
          name="telefono"
          className={styles.input}
          placeholder="Teléfono (WhatsApp) *"
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

        {/* MOVILIDAD */}
        <h3 className={styles.subtitle}>Medio de movilidad *</h3>

        <select name="movilidad" className={styles.input} required>
          <option value="">Seleccionar...</option>
          <option value="Moto">Moto</option>
          <option value="Bicicleta">Bicicleta</option>
          <option value="Auto">Auto</option>
          <option value="A pie">A pie</option>
        </select>

        {/* DISPONIBILIDAD */}
        <h3 className={styles.subtitle}>Disponibilidad — Días</h3>

        <div className={styles.checkboxGroup}>
          <label>
            <input type="checkbox" name="dias[]" value="Lunes a viernes" />{" "}
            Lunes a viernes
          </label>
          <label>
            <input type="checkbox" name="dias[]" value="Sábados" /> Sábados
          </label>
          <label>
            <input type="checkbox" name="dias[]" value="Domingos" /> Domingos
          </label>
          <label>
            <input type="checkbox" name="dias[]" value="Feriados" /> Feriados
          </label>
        </div>

        <h3 className={styles.subtitle}>Disponibilidad — Horarios</h3>

        <div className={styles.checkboxGroup}>
          <label>
            <input type="checkbox" name="horarios[]" value="Mañana" /> Mañana
            (10–15)
          </label>
          <label>
            <input type="checkbox" name="horarios[]" value="Tarde" /> Tarde
            (15–20)
          </label>
          <label>
            <input type="checkbox" name="horarios[]" value="Noche" /> Noche
            (20–00)
          </label>
          <label>
            <input type="checkbox" name="horarios[]" value="Full Time" /> Full
            Time
          </label>
        </div>

        {/* EXPERIENCIA */}
        <h3 className={styles.subtitle}>Experiencia previa</h3>

        <select name="experiencia_delivery" className={styles.input}>
          <option value="">¿Tenés experiencia en delivery?</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>

        <input
          name="apps"
          className={styles.input}
          placeholder="¿Trabajaste con apps? ¿Cuáles?"
        />

        {/* MOTIVACIÓN */}
        <h3 className={styles.subtitle}>Motivación para unirse</h3>

        <div className={styles.checkboxGroup}>
          <label>
            <input type="checkbox" name="motivacion[]" value="Ingresos extra" />{" "}
            Generar ingresos extra
          </label>
          <label>
            <input
              type="checkbox"
              name="motivacion[]"
              value="Horarios flexibles"
            />{" "}
            Horarios flexibles
          </label>
          <label>
            <input
              type="checkbox"
              name="motivacion[]"
              value="Equipo en crecimiento"
            />{" "}
            Equipo en crecimiento
          </label>
        </div>

        <textarea
          name="motivacion_otro"
          className={styles.textarea}
          placeholder="Otra motivación (opcional)"
        />

        {/* CELULAR */}
        <h3 className={styles.subtitle}>Contacto operativo *</h3>

        <select name="tiene_datos" className={styles.input} required>
          <option value="">¿Tenés celular con datos móviles?</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>

        {/* FINAL */}
        <h3 className={styles.subtitle}>¿Querés empezar esta semana?</h3>

        <select name="inicio" className={styles.input}>
          <option value="Sí">Sí, quiero que me contacten</option>
          <option value="Más adelante">
            Estoy interesado, pero más adelante
          </option>
          <option value="Solo info">Solo quiero info</option>
        </select>

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
