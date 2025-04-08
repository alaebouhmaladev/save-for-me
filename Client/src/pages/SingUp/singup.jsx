import React from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";

const SingUp = () =>{
    return (
        <>
            <NavBar />

            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form onSubmit={() => { }} className="flex flex-col py-4">
                        <h4 className="text-2xl mb-7 text-center"> SingUp </h4>
                        <input type="text" placeholder="Name" className="input-box py-2 px-2 my-2 border rounded" />
                        <input type="text" placeholder="Email" className="input-box py-2 px-2 my-2 border rounded" />
                        <input type="password" placeholder="Password" className="input-box py-2 px-2 my-2 border rounded" />
                        <button type="submit" className="bg-primary text-white py-2 px-2 my-2 border rounded"> SingUp </button>
                        <p className="text-sm text-center mt-4"> Have Account? {""}
                            <Link to="/login" className="text-primary font-semibold" >
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SingUp;