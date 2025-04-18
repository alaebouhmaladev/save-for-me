import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Renamed onSubmit for clarity
const CreateContactForm = ({ onContactSaved }) => { 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [note, setNote] = useState("");

    const handleSubmit = async (event) => {

        // Prevent default form submission
        event.preventDefault(); 

        const newContact = {
            name: name,
            email: email,
            telephone: telephone,
            note: note,
        };

        try {
            // Replace with API endpoint
            const response = await fetch('/api/contacts', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newContact),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Contact saved successfully:', data);
                toast.success('Contact saved successfully!');
                // Optionally, call a function in the parent component to update the contact list
                if (onContactSaved) {
                    onContactSaved(data);
                }
                // Reset the form
                setName("");
                setEmail("");
                setTelephone("");
                setNote("");
            } else {
                console.error('Failed to save contact:', response.status);
                // Handle error messages from the API if available
                try {
                    const errorData = await response.json();
                    console.error('Error details:', errorData);
                    toast.error(`Failed to save contact: ${errorData?.message || response.statusText}`);
                } catch (error) {
                    console.error('Error parsing error response:', error);
                    toast.error('Failed to save contact.');
                }
            }
        } catch (error) {
            console.error('There was an error sending the request:', error);
            toast.error('An unexpected error occurred.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-lg font-semibold">Save Contact</h2>
                <input type="text" placeholder="Name" className="w-full border p-2 rounded" value={name} onChange={(e) => { setName(e.target.value) }} />
                <input type="email" placeholder="Email (optional)" className="w-full border p-2 rounded" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="tel" placeholder="Phone (optional)" className="w-full border p-2 rounded" value={telephone} onChange={(e) => { setTelephone(e.target.value) }} />
                <textarea placeholder="Note (optional)" className="w-full border p-2 rounded" value={note} onChange={(e) => { setNote(e.target.value) }}></textarea>
                <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
                    Save Contact
                </button>
            </form>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
};

export default CreateContactForm;