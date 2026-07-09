import { useState } from "react";
import axios, { AxiosError } from "axios";
import "../styles/cadastre-se.css";

function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e:React.FormEvent) {
        e.preventDefault();

        try{
            await axios.post("https://achei-aqui-backend.onrender.com/auth/register", {
                name, email, password
            });
            alert("Cadastro realizado!");
        }catch (err) {
            const error = err as AxiosError<{error:string}>;
            alert(error.response?.data?.error || "Erro ao cadastrar");
        }
    }

    return(
        <section className="auth-page">
            <h2>Cadastre-se</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <label>
                    Nome
                    <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                </label>
                <label>
                    Email
                    <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Senha
                    <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <button className="btn-primary" type="submit">
                    Criar conta
                </button>
            </form>
        </section>
    );
}

export default RegisterPage;