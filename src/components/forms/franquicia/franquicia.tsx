"use client";

import { useState } from "react";
import styles from "../../../styles/forms/franquicia.module.css";

export default function FormFranquicia() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const form = e.currentTarget;

      const getInputValue = (name: string): string => {
        const el = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(
          `[name="${name}"]`
        );
        return el?.value || "";
      };

      const getCheckboxValues = (name: string): string => {
        const nodes = form.querySelectorAll<HTMLInputElement>(
          `input[name="${name}[]"]:checked`
        );
        return Array.from(nodes)
          .map((input) => input.value)
          .join(", ");
      };

      const nombre = getInputValue("nombre");
      const edad = getInputValue("edad");
      const telefono = getInputValue("telefono");
      const email = getInputValue("email");
      const ciudad = getInputValue("ciudad");
      const vive = getCheckboxValues("vive");
      const motivacion = getCheckboxValues("motivacion");
      const motivacion_otro = getInputValue("motivacion_otro");
      const relacion = getCheckboxValues("relacion");
      const demanda = getInputValue("demanda");
      const tiempo = getCheckboxValues("tiempo");
      const experiencia = getCheckboxValues("experiencia");
      const inversion = getCheckboxValues("inversion");
      const avanzar = getCheckboxValues("avanzar");
      const motivacion_final = getInputValue("motivacion_final");

      const texto = encodeURIComponent(
        `Formulario Interés Puni
Nombre: ${nombre}
Edad: ${edad}
Teléfono: ${telefono}
Email: ${email}
Ciudad: ${ciudad}
Vive actualmente: ${vive}
Motivación: ${motivacion}${motivacion_otro ? " / " + motivacion_otro : ""}
Relación con comercios/repartidores: ${relacion}
Demanda local: ${demanda}
Tiempo disponible: ${tiempo}
Experiencia liderando: ${experiencia}
Inversión disponible: ${inversion}
Interés en avanzar: ${avanzar}
Motivo final: ${motivacion_final}`
      );

      window.open(`https://wa.me/3548635151?text=${texto}`, "_blank");

      setSent(true);
      setLoading(false);
      form.reset();
    } catch (err) {
      console.error(err);
      setError("Hubo un error, intenta nuevamente.");
      setLoading(false);
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Quiero abrir Puni en mi ciudad</h2>

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
          name="edad"
          className={styles.input}
          type="number"
          min="18"
          placeholder="Edad *"
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
          className={styles.input}
          type="email"
          placeholder="Correo electrónico *"
          required
        />

        {/* UBICACIÓN */}
        <h3 className={styles.subtitle}>Ubicación</h3>
        <input
          name="ciudad"
          className={styles.input}
          placeholder="Ciudad y provincia *"
          required
        />

        <div className={styles.checkboxGroup}>
          <p>¿Vivís en esta ciudad actualmente?</p>
          <label>
            <input type="checkbox" name="vive[]" value="Sí" /> Sí
          </label>
          <label>
            <input type="checkbox" name="vive[]" value="No" /> No
          </label>
        </div>

        {/* MOTIVACIÓN */}
        <h3 className={styles.subtitle}>Motivación</h3>
        <div className={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              name="motivacion[]"
              value="Quiero emprender con un modelo probado"
            />{" "}
            Quiero emprender con un modelo probado
          </label>
          <label>
            <input
              type="checkbox"
              name="motivacion[]"
              value="Me interesa la logística y tecnología"
            />{" "}
            Me interesa la logística y tecnología
          </label>
          <label>
            <input
              type="checkbox"
              name="motivacion[]"
              value="Veo una oportunidad clara en mi ciudad"
            />{" "}
            Veo una oportunidad clara en mi ciudad
          </label>
          <label>
            <input type="checkbox" name="motivacion[]" value="Otra" /> Otra
          </label>
        </div>
        <textarea
          name="motivacion_otro"
          className={styles.textarea}
          placeholder="Otra motivación (opcional)"
        />

        {/* CONOCIMIENTO DEL MERCADO */}
        <h3 className={styles.subtitle}>Conocimiento del mercado local</h3>
        <div className={styles.checkboxGroup}>
          <p>¿Tenés relación con comercios o repartidores en tu ciudad?</p>
          <label>
            <input type="checkbox" name="relacion[]" value="Sí" /> Sí
          </label>
          <label>
            <input type="checkbox" name="relacion[]" value="No" /> No
          </label>
        </div>
        <textarea
          name="demanda"
          className={styles.textarea}
          placeholder="¿Cómo describirías la demanda de delivery en tu ciudad?"
        />

        {/* CAPACIDAD OPERATIVA */}
        <h3 className={styles.subtitle}>Capacidad operativa</h3>
        <div className={styles.checkboxGroup}>
          <p>¿Tenés tiempo disponible para gestionar la operación local?</p>
          <label>
            <input type="checkbox" name="tiempo[]" value="Sí" /> Sí
          </label>
          <label>
            <input type="checkbox" name="tiempo[]" value="No" /> No
          </label>
          <label>
            <input
              type="checkbox"
              name="tiempo[]"
              value="Depende del horario"
            />{" "}
            Depende del horario
          </label>
        </div>
        <div className={styles.checkboxGroup}>
          <p>¿Tenés experiencia liderando equipos o gestionando proyectos?</p>
          <label>
            <input type="checkbox" name="experiencia[]" value="Sí" /> Sí
          </label>
          <label>
            <input type="checkbox" name="experiencia[]" value="No" /> No
          </label>
          <label>
            <input
              type="checkbox"
              name="experiencia[]"
              value="Algo de experiencia"
            />{" "}
            Algo de experiencia
          </label>
        </div>

        {/* CAPACIDAD DE INVERSIÓN */}
        <h3 className={styles.subtitle}>Capacidad de inversión</h3>
        <div className={styles.checkboxGroup}>
          <p>¿Podrías invertir en abrir la unidad?</p>
          <label>
            <input type="checkbox" name="inversion[]" value="Sí" /> Sí
          </label>
          <label>
            <input type="checkbox" name="inversion[]" value="No" /> No
          </label>
          <label>
            <input
              type="checkbox"
              name="inversion[]"
              value="Necesitaría financiación"
            />{" "}
            Necesitaría financiación
          </label>
        </div>

        {/* INTERÉS EN AVANZAR */}
        <h3 className={styles.subtitle}>Interés en avanzar</h3>
        <div className={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              name="avanzar[]"
              value="Estoy listo para avanzar ya"
            />{" "}
            Estoy listo para avanzar ya
          </label>
          <label>
            <input
              type="checkbox"
              name="avanzar[]"
              value="Quiero conversar y conocer más"
            />{" "}
            Quiero conversar y conocer más
          </label>
        </div>

        {/* PREGUNTA FINAL */}
        <h3 className={styles.subtitle}>
          ¿Qué te motiva a traer Puni a tu ciudad?
        </h3>
        <input
          type="text"
          name="motivacion_final"
          className={styles.input}
          placeholder="Motivo final"
        />

        {/* BOTÓN */}
        <button className={styles.button} disabled={loading}>
          {loading ? "Enviando..." : "Enviar formulario vía WhatsApp"}
        </button>

        {sent && (
          <p className={styles.success}>Formulario enviado correctamente ✔</p>
        )}
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </section>
  );
}
