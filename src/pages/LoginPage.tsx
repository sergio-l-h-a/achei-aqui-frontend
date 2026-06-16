
import { useState } from "react";
import { AxiosError } from "axios";
import api from "../services/api";
import "../styles/login.css";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

      try {
        const res = await api.post("/auth/login", {
            email,
            password,
        });

        console.log(res.data);
        alert("Login realizado!");
        
        } catch (err) {
        const error = err as AxiosError<{ error: string }>;
        alert(error.response?.data?.error || "Erro ao fazer login");
        }

    }

    return(
        <section className="auth-page">
            <h1>Entrar</h1>
            <form onSubmit={handleSubmit} className="auth-form">
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
                    Entrar
                </button>
            </form>
        </section>
    );
}

export default LoginPage;