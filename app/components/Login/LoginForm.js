"use client"

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const googleInitialized = useRef(false);
    const googleButtonRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const initializeGoogle = () => {
            if(!window.google || !googleButtonRef.current || googleInitialized.current) return;

            googleInitialized.current = true;

            window.google.accounts.id.initialize({
                client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
                callback: handleGoogleLogin
            });

            window.google.accounts.id.renderButton(
                googleButtonRef.current,
                {
                    theme: "outline",
                    size: "large",
                    width: 320,
                    text: "continue_with",
                    shape: "rectangular"
                }
            );
        };

        if(window.google) {
            initializeGoogle();
            return;
        }

        const script = document.createElement("script");

        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        script.onload = initializeGoogle;
        
        document.body.appendChild(script);

        return () => {
            if(document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };

    }, []);

    const handleGoogleLogin = (response) => {
        try {
            const token = response.credential;
            const payload = token.split(".")[1];

            const decodedPayload = JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(payload), char => char.charCodeAt(0))));

            console.log("Usuário autenticado pela Google");
            console.log("Nome:", decodedPayload.name);
            console.log("E-mail:", decodedPayload.email);
            console.log("Foto:", decodedPayload.picture);

            alert(`Login realizado com sucesso!\nBem-vindo, ${decodedPayload.name}!`);

            router.push("/");
        } catch (error) {
            console.error("Erro ao processar login com Google:", error);

            alert("Não foi possível realizar o login com Google.");
        }
    };

    return (
        <div className="bg-snow border-3 rounded-2xl shadow-[0_0_50px] shadow-gray-400 h-auto w-auto p-5 flex flex-col justify-center items-center sm:p-8">

            <div className="flex flex-col gap-8 text-center items-center">
                <h1 className="text-2xl sm:text-5xl">Login</h1>

                <p className="text-sm sm:text-lg">Entre utilizando sua conta Google</p>

                <div ref={googleButtonRef} className="flex justify-center"/>
            </div>

        </div>
    );
}

export default LoginForm