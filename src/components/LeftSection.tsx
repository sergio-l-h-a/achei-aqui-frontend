import "../styles/left-section.css";


export default function LeftSection() {
    return(
        <aside className="left-section" id="categorias">
            <h3>Categorias Profissionais</h3>

            <ul>
                <li>🍽️<a href="#">Alimentação</a></li>
                <li>🩺<a href="#">Saúde & Bem-Estar</a></li>
                <li>🎓<a href="#">Educação</a></li>
                <li>🪣<a href="#">Serviços Domésticos</a></li>
                <li>👗<a href="#">Moda & Varejo</a></li>
                <li>💻<a href="#">Tecnologia</a></li>
                <li>🍔<a href="http://localhost:5173/categoria/4">Hamburguer</a></li>
                <li>🍕<a href="http://localhost:5173/categoria/4">Pizzaria</a></li>
                <li>🎮<a href="#">Games</a></li>
                <li>✂️<a href="http://localhost:5173/categoria/1">Barbeiro</a></li>
                <li>💅<a href="#">Manicure</a></li>
                <li>💇🏼‍♀️<a href="#">Salão de Beleza</a></li>
            </ul>
        </aside>
    )
}