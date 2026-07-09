import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import "../styles.css";
import "../styles/home.css";
import LeftSection from "../components/LeftSection";

interface Category {
  id: number;
  name: string;
  icon: string;
  image_url: string;
  descricao: string;
}

export default function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    api.get("/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <section className="home">
      <div className="banner">
        <img src="https://achei-aqui-backend.onrender.com/imagens/banner-guia-local.png
" alt="Banner Guia Local" />
        <Link to="cadastro" className="btn-banner">
            Cadastre seu negócio
        </Link>
      </div>
      
      <LeftSection />
      <div className="category-grid">
        {categories.map((c) => (
          <Link key={c.id} to={`https://achei-aqui-backend.onrender.com//categoria/${c.id}`} className="category-grid">
            <img src={c.image_url} alt={c.name} className="img-large " />
            <h3>{c.name}</h3>
            <p>{c.descricao}</p>
            <button>Falar no Whatsapp</button>
          </Link>
        ))}
      </div>
    </section>
  );
}

