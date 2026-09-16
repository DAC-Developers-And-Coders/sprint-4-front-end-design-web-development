"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleLogin = (event) => {
        event.preventDefault();

        if (username === "" || password === "") {
            alert("Preencha o e-mail e a senha.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const validUser = users.find(
            (user) =>
                user.login === username && user.password === password
        );

        if (validUser) {
            alert("Login realizado com sucesso!");

            router.push("/");

        } else {
            alert("E-mail ou senha incorretos.");
        }
    };

    const handleRegister = () => {
        if (username === "" || password === "") {
            alert("Preencha o e-mail e a senha.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(!emailRegex.test(username)) {
            alert("Digite um email válido.")
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const existentUser = users.find(
            (user) => user.login === username
        );

        if (existentUser) {
            alert("Esse usuário já existe.");
            return;
        }

        users.push({
            login: username,
            password: password,
        });

        localStorage.setItem("users", JSON.stringify(users));

        alert("Usuário cadastrado com sucesso!");

        setUsername("");
        setPassword("");
    };


    return (
        <div className="container-login">
            <form className="form-login" onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="input-login">
                    <input 
                    type="email" 
                    placeholder="E-mail"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                
                <div className="input-login">
                    <input 
                    type="password" 
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="btn-login">
                    <button 
                    type= "submit">Entrar</button>
                    <button type="button"
                    onClick={handleRegister}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm