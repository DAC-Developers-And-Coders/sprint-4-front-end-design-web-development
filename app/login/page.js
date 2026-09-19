import LoginForm from "../components/Login/LoginForm"

function Login() {
    return (
        <>
        <main className=" min-h-dvh bg-black grid grid-cols-1 gap-8 content-center justify-center">
            <div className="flex flex-col gap-12 justify-center items-center">
                <div className="flex flex-row gap-5">
                    <img className=" w-40.5" src="/assets/images/DAC_logo_mini.png"></img>
                    <img className="w-40.5" src="/assets/images/jovi_logo_white.png"></img>
                </div>
                <LoginForm/>
            </div>   
        </main>
        </>
    )
}

export default Login