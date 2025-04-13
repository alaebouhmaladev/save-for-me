import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
    return (
        
        <div className={`p-4 rounded-lg shadow-md bg-white border-2 ${isPinned ? 'border-blue-900' : 'border-blue-200'} hover:border-blue-400`}>
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h2 className="text-sm font-semibold">{title}</h2>
                    <span className="text-xs text-slate-500">{date}</span>
                </div>
                <MdOutlinePushPin
                    className={`text-xl cursor-pointer ${isPinned ? 'text-yellow-500' : 'text-slate-400'} hover:text-yellow-600`}
                    onClick={onPinNote}
                    title="Pin Note"
                    aria-label="Pin Note"
                />
            </div>

            <p className="text-sm text-slate-800 mb-2">
                {content?.slice(0, 100)}...
            </p>

            <div className="flex justify-between items-center text-sm text-slate-600">
                <span className="text-xs bg-slate-100 px-2 py-1 rounded">{tags}</span>
                <div className="flex items-center gap-3">
                    <MdCreate
                        className="text-lg cursor-pointer hover:text-green-600"
                        onClick={onEdit}
                        title="Edit Note"
                        aria-label="Edit Note"
                    />
                    <MdDelete
                        className="text-lg cursor-pointer hover:text-red-600"
                        onClick={onDelete}
                        title="Delete Note"
                        aria-label="Delete Note"
                    />
                </div>
            </div>
        </div>
    );
};

export default NoteCard;
