import { redirectToAuthCodeFlow, getAccessToken } from "../../utils/authCodeWithPkce";

const clientId = "be9c648239c9405e8e9c4a025f3438cb";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");


const Login = () => {
    return (
        <div className={'login'}>
            <h1>Login Page</h1>
        </div>
    );
};

export default Login;