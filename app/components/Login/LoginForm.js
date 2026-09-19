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

        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(!emailFormat.test(username)) {
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
        <>
            <div className=" bg-snow border-3 rounded-2xl shadow-[0_0_50px] shadow-gray-400 h-auto w-auto p-5 flex flex-col justify-center items-center">
                <form onSubmit={handleLogin} className="flex flex-col gap-8 text-center items-center">
                    <h1 className="text-2xl">Login</h1>
                    <div>
                        <input 
                        className="w-60 h-8 text-center text-sm border-2 rounded-2xl transition-all duration-500 hover:scale-102"
                        type="email" 
                        placeholder="E-mail"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    
                    <div>
                        <input 
                        className="w-60 h-8 text-center text-sm border-2 rounded-2xl transition-all duration-500 hover:scale-102"
                        type="password" 
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className="flex justify-center gap-12">
                        <button type= "submit" className="w-24.75 h-10 border-2 rounded-xl text-lg transition-all duration-500 hover:scale-104">
                            Entrar
                        </button>
                        <button type="button" className="w-24.75 h-10 border-2 rounded-xl text-lg transition-all duration-500 hover:scale-104" onClick={handleRegister}>
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm