"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/bot.module.css";

type BotMessage = {
  id: number;
  from: "bot" | "user";
  text: string;
};

type QuickAction = {
  label: string;
  href: string;
};

export default function BotAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<BotMessage[]>([]);
  const [quickActions, setQuickActions] = useState<QuickAction[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  /* SALUDO INICIAL */
  useEffect(() => {
    if (!hasGreeted) {
      setTimeout(() => {
        setMessages([
          {
            id: Date.now(),
            from: "bot",
            text: "Hola 👋 soy Packy. ¿Como te puedo ayudar?",
          },
        ]);

        setQuickActions([
          { label: "Quiero hacer envíos", href: "/forms/envios" },
          { label: "Quiero ser repartidor", href: "/forms/repartidores" },
          { label: "Quiero Puni en mi ciudad", href: "/forms/colaborar" },
        ]);

        setHasGreeted(true);
      }, 600);
    }
  }, [hasGreeted]);

  /* AUTOSCROLL */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, quickActions, isTyping]);

  const toggleBot = () => {
    setIsOpen((prev) => !prev);
    setShowPreview(false); // si abre el bot, no mostrar más la burbuja
  };

  const closePreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPreview(false);
  };

  const addBotMessage = (text: string, actions: QuickAction[]) => {
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now(), from: "bot", text }]);
      setQuickActions(actions);
      setIsTyping(false);
    }, 500);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const text = input.trim();
    setInput("");

    setMessages((prev) => [...prev, { id: Date.now(), from: "user", text }]);
    handleBotLogic(text);
  };

  /* LÓGICA DE INTENCIONES */
  const handleBotLogic = (text: string) => {
    const t = text.toLowerCase();

    if (
      t.includes("mi ciudad") ||
      t.includes("abrir") ||
      t.includes("franquicia") ||
      t.includes("llevar puni") ||
      t.includes("representar") ||
      t.includes("expandir")
    ) {
      addBotMessage(
        "🚀 Perfecto. Si querés llevar Puni a tu ciudad, este es el siguiente paso.",
        [
          { label: "Quiero Puni en mi ciudad", href: "/forms/colaborar" },
          { label: "Por qué elegirnos", href: "/porQueElegirnos" },
        ]
      );
      return;
    }

    if (
      t.includes("envio") ||
      t.includes("enviar") ||
      t.includes("paquete") ||
      t.includes("empresa") ||
      t.includes("comercio") ||
      t.includes("negocio")
    ) {
      addBotMessage(
        "📦 Puni ayuda a comercios y empresas a gestionar envíos.",
        [
          { label: "Quiero hacer envíos", href: "/forms/envios" },
          { label: "¿Cómo funciona?", href: "/comoFunciona" },
        ]
      );
      return;
    }

    if (
      t.includes("repartidor") ||
      t.includes("repartir") ||
      t.includes("trabajar") ||
      t.includes("cadete") ||
      t.includes("ganar") ||
      t.includes("moto") ||
      t.includes("bici")
    ) {
      addBotMessage("🚴‍♂️ Podés sumarte como repartidor y trabajar con Puni.", [
        { label: "Quiero ser repartidor", href: "/forms/repartidores" },
        { label: "¿Cómo funciona?", href: "/comoFunciona" },
      ]);
      return;
    }

    if (
      t.includes("qué es") ||
      t.includes("que es") ||
      t.includes("info") ||
      t.includes("información") ||
      t.includes("puni")
    ) {
      addBotMessage(
        "Puni es una plataforma logística que conecta comercios, repartidores y envíos.",
        [
          { label: "¿Cómo funciona?", href: "/comoFunciona" },
          { label: "Por qué elegirnos", href: "/porQueElegirnos" },
        ]
      );
      return;
    }

    /* FALLBACK GUIADO */
    addBotMessage("Para ayudarte mejor, decime qué necesitás 👇", [
      { label: "Quiero hacer envíos", href: "/forms/envios" },
      { label: "Quiero ser repartidor", href: "/forms/repartidores" },
      { label: "Quiero Puni en mi ciudad", href: "/forms/colaborar" },
    ]);
  };

  return (
    <div className={styles.bot}>
      {/* BOTÓN */}
      <button
        className={styles.botButton}
        onClick={toggleBot}
        aria-expanded={isOpen}
        aria-label="Abrir chat con Packy"
      >
        <Image
          src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1767039359/ChatGPT_Image_29_dic_2025_05_15_32_p.m._mnfbhl.png"
          alt="Chat Packy"
          width={40}
          height={40}
          className={styles.botImage}
          priority
        />
      </button>

      {/* PREVIEW CERRABLE */}
      {!isOpen && showPreview && messages.length > 0 && (
        <div className={styles.botPreview} onClick={toggleBot}>
          <span>{messages[0].text}</span>

          <button
            className={styles.botPreviewClose}
            onClick={closePreview}
            aria-label="Cerrar saludo"
          >
            ✕
          </button>
        </div>
      )}

      {/* PANEL */}
      {isOpen && (
        <div className={styles.botPanel}>
          <div className={styles.botHeader}>
            <div className={styles.botHeaderLogo} />
            <button className={styles.botClose} onClick={toggleBot}>
              ✕
            </button>
          </div>

          <div className={styles.botMessages}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={
                  msg.from === "bot" ? styles.botMessage : styles.userMessage
                }
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className={styles.botTyping}>Packy está escribiendo…</div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {quickActions.length > 0 && (
            <div className={styles.botQuickActions}>
              {quickActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={styles.botQuickAction}
                  onClick={toggleBot}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          )}

          <div className={styles.botInputWrapper}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Escribí lo que necesitás…"
              className={styles.botInput}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className={styles.botSend}
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
