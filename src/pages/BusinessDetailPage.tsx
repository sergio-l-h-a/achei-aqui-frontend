import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import "../styles.css";

interface Business {
  id: number;
  name: string;
  description: string;
  address: string;
  whatsapp: string;
  image_url: string;
  schedule: string;
  category_name: string;
}

export default function BusinessDetailPage() {
  const { id } = useParams();
  const [business, setBusiness] = useState<Business | null>(null);

  useEffect(() => {
    api
      .get(`/business/${id}`)
      .then(res => setBusiness(res.data))
      .catch(() => console.log("Erro ao carregar negócio"));
  }, [id]);

  if (!business) {
    return <p>Carregando...</p>;
  }

  return (
    <section className="business-detail">
      <h2>{business.name}</h2>
      <p><strong>Categoria:</strong> {business.category_name}</p>
      <p><strong>Descrição:</strong> {business.description}</p>
      <p><strong>Endereço:</strong> {business.address}</p>
      <p><strong>WhatsApp:</strong> {business.whatsapp}</p>
      <p><strong>Horário:</strong> {business.schedule}</p>

      {business.image_url && (
        <img src={business.image_url} alt={business.name} />
      )}
    </section>
  );
}
