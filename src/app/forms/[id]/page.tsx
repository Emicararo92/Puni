// app/registros/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import RepartidorForm from "../../../components/forms/puners/puner";
import ComercioForm from "../../../components/forms/comercio/comercio";
import FormInteresPuni from "@/src/components/forms/franquicia/franquicia";

export default function RegistroPage() {
  const { id } = useParams(); // <-- acá obtenés repartidores / envios / colaborar

  const renderForm = () => {
    switch (id) {
      case "repartidores":
        return <RepartidorForm />;
      case "envios":
        return <ComercioForm />;
      case "colaborar":
        return <FormInteresPuni />;
      default:
        return <h2>Formulario no encontrado</h2>;
    }
  };

  return <section style={{ padding: "4rem 2rem" }}>{renderForm()}</section>;
}
