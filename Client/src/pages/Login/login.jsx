import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import PasswordInput from "../../components/Inputs/PasswordInput";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email address!");
            return;
        }

        if (!password) {
            setError("Please enter your password!");
            return;
        }

        setError("");

        try {
            // Replace with login API endpoint
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                toast.success('Login successful!');
                // Store token in local storage
                localStorage.setItem('authToken', data.token);
                navigate('/dashboard');
            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData);
                toast.error(errorData?.message || 'Login failed. Please check your credentials.');
            }
        } catch (err) {
            console.error('Error during login:', err);
            toast.error('An unexpected error occurred during login.');
        }
    };

    return (
        <>

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
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
    );
};

export default Login;