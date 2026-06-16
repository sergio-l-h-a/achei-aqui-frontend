
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
    return(
        <header className="header">

            <h1>Vila Mel Guia Local</h1>
            <nav className="navebar">

                {/* <p>Encontre negócios locais, serviços e profissionais perto de você.</p> */}

                <ul className="list-content">

                    <li>
                        <Link to="/" className="btn-primary">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/como-funciona" className="btn-primary">
                            Como Funciona
                        </Link>
                    </li>
                    <li>
                        <Link to="/categoria" className="btn-primary">
                            Categorias
                        </Link>
                    </li>

                    <li>
                        <Link to="/login" className="btn-primary">
                            Entrar
                        </Link>
                    </li>

                    <li>
                        <Link to="cadastro" className="btn-secondary">
                            Cadastre seu negócio
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;