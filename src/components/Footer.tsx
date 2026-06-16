import "../styles/footer.css";


function Footer() {
    return(
        <footer className="footer">
            <p>&copy;{new Date().getFullYear()} Guia Local - Vile Mel</p>
        </footer>
    );
}

export default Footer;