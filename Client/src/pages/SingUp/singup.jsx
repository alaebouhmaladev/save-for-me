import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/Inputs/PasswordInput";
import { validateEmail } from "../../utils/helper";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSingUp = async (e) => {
        e.preventDefault();

        if (!name) {
            setError("Please enter your Name!");
            return;
        }

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
            // Replace with signup API endpoint
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Signup successful:', data);
                toast.success('Signup successful!');
                // Store token
                localStorage.setItem('authToken', data.token);
                navigate('/dashboard');
            } else {
                const errorData = await response.json();
                console.error('Signup failed:', errorData);
                toast.error(errorData?.message || 'Signup failed. Please try again.');
            }
        } catch (err) {
            console.error('Error during signup:', err);
            toast.error('An unexpected error occurred during signup.');
        }
    };

    return (
        <>

            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form onSubmit={handleSingUp} className="flex flex-col py-4">
                        <h4 className="text-2xl mb-7 text-center"> SingUp </h4>

                        <input
                            type="text"
                            placeholder="Name"
                            className="input-box py-2 px-2 my-2 border rounded"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <input
                            type="text"
                            placeholder="Email"
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

                        <button type="submit" className="bg-primary text-white py-2 px-2 my-2 border rounded"> SingUp </button>
                        <p className="text-sm text-center mt-4"> Have Account? {""}
                            <Link to="/login" className="text-primary font-semibold" >
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
    );
};

export default SingUp;