import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import "../styles/categoria-page.css";

interface Business {
  id: number;
  name: string;
  description: string;
  image_url: string;
  whatsapp: string;
}

export default function CategoriaPage() {
  const { id } = useParams();
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    api.get(`/categories/${id}`).then(res => {
      setCategoryName(res.data.name);
    });

    api.get(`/business/category/${id}`).then(res => {
      setBusinesses(res.data);
    });
  }, [id]);

  return (
    <section className="categoria-container">
      <h1>{categoryName}</h1>

      <div className="categoria-grid">
        {businesses.map(b => (
          <div key={b.id} className="categoria-card">
            <img src={b.image_url} alt={b.name} />

            <h3>{b.name}</h3>
            <p>{b.description}</p>

            <a
              className="btn-whatsapp"
              href={`https://wa.me/${b.whatsapp}`}
              target="_blank"
            >
              Contato / WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
