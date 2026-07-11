import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles.css";

interface Business {
  id: number;
  name: string;
  description: string;
  image_url: string;
  category_id: number;
}

function BusinessListPage() {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    api
      .get("/business")
      .then(res => setBusinesses(res.data))
      .catch(() => console.log("Erro ao carregar negócios"));
  }, []);

  return (
    <section className="business-list">
      <h2>Negócios cadastrados</h2>
      {/* <div className="business-grid">
        {businesses.map((b) => (
          <Link key={b.id} to={`/negocios/${b.id}`} className="business-card">
            <h3>{b.name}</h3>
            <p>{b.description}</p>
          </Link>
        ))}
      </div> */}
      <div className="business-grid">
        {businesses.map((b: Business) => (
          <Link key={b.id} to={`/negocios/${b.id}`} className="business-card">
            <div className="card-image">
              <img src={b.image_url} alt={b.name} />
            </div>

            <div className="card-info">
              <h3>{b.name}</h3>
              <span className="category">{b.name}</span>
              <p>{b.description}</p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}

export default BusinessListPage;