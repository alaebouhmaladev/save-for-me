import React from "react";

const CreateNoteForm = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <h2 className="text-lg font-semibold">Create Note</h2>
            <input type="text" placeholder="Title" className="w-full border p-2 rounded" />
            <textarea placeholder="Content" className="w-full border p-2 rounded" />
            <input type="text" placeholder="Tags (e.g. #work)" className="w-full border p-2 rounded" />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Save Note
            </button>
        </form>
    );
};

export default CreateNoteForm;
