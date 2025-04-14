import React from "react";

const CreateContactForm = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <h2 className="text-lg font-semibold">Save Contact</h2>
            <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
            <input type="email" placeholder="Email (optional)" className="w-full border p-2 rounded" />
            <input type="tel" placeholder="Phone (optional)" className="w-full border p-2 rounded" />
            <input type="text" placeholder="Note (optional)" className="w-full border p-2 rounded" />
            <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
                Save Contact
            </button>
        </form>
    );
};

export default CreateContactForm;
