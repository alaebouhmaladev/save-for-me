import React from "react";
import { MdCreate, MdDelete } from "react-icons/md";

const ContactCard = ({ name, email, phone, onEdit, onDelete }) => {
    return (
        <div className="p-4 rounded-lg shadow-md bg-white border hover:border-blue-400 transition-all">
            <h3 className="text-sm font-semibold mb-1">{name}</h3>
            {email && (
                <p className="text-xs text-slate-600">
                    <span className="font-medium">Email:</span> {email}
                </p>
            )}
            {phone && (
                <p className="text-xs text-slate-600">
                    <span className="font-medium">Phone:</span> {phone}
                </p>
            )}

            <div className="flex justify-end gap-3 mt-3 text-slate-600">
                <MdCreate
                    className="text-lg cursor-pointer hover:text-green-600"
                    onClick={onEdit}
                    title="Edit Contact"
                    aria-label="Edit Contact"
                />
                <MdDelete
                    className="text-lg cursor-pointer hover:text-red-600"
                    onClick={onDelete}
                    title="Delete Contact"
                    aria-label="Delete Contact"
                />
            </div>
        </div>
    );
};

export default ContactCard;
