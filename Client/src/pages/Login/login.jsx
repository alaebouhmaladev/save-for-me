import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import PasswordInput from "../../components/Inputs/PasswordInput";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);


    const handleLogin = async (e) => {

        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valide email address!");
            return;
        }

        if (!password) {
            setError("Please Enetr your password!");
            return;
        }

        setError("");

    };


        // Login Api Call 

    return (
        <>
            <NavBar />

            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form onSubmit={handleLogin} className="flex flex-col py-4">
                        <h4 className="text-2xl mb-7 text-center"> Login </h4>
                        <input
                            type="text"
                            placeholder="Email/Username"
                            className="input-box py-2 px-2 my-2 border rounded"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <PasswordInput
                            placeholder="Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />

                        {error && <p className="text-red-800 text-xs pb-1">{error}</p>}

                        <button type="submit" className="bg-primary text-white py-2 px-2 my-2 border rounded"> Login </button>
                        <p className="text-sm text-center mt-4"> Not registered yet? {""}
                            <Link to="/singup" className="text-primary font-semibold" >
                                Create Account
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;