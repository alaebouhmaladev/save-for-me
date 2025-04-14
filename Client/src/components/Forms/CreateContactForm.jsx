import React, { useState } from "react";

const CreateContactForm = ({ onSubmit }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [note, setNote] = useState("");

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <h2 className="text-lg font-semibold">Save Contact</h2>
            <input type="text" placeholder="Name" className="w-full border p-2 rounded" value={name} onChange={(e) => { setName(e.target.value) }} />
            <input type="email" placeholder="Email (optional)" className="w-full border p-2 rounded" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <input type="tel" placeholder="Phone (optional)" className="w-full border p-2 rounded" value={telephone} onChange={(e) => { setTelephone(e.target.value) }} />
            <textarea placeholder="Note (optional)" className="w-full border p-2 rounded" value={note} onChange={(e) => { setNote(e.target.value) }}></textarea>
            <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
                Save Contact
            </button>
        </form>
    );
};

export default CreateContactForm;
