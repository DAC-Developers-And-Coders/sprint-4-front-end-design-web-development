import LoginForm from "../components/Login/LoginForm"

function Login() {
    return (
        <div id='login'>
            <div className="img-login">
                <img src="/assets/images/DAC_logo_mini.png"></img>
                <img src="/assets/images/jovi_logo_white.png"></img>
            </div>
            <LoginForm/>
        </div>
    )
}

export default Login