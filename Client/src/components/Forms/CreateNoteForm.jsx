import React, { useState } from "react";

const CreateNoteForm = ({ onSubmit }) => {

    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [tags, setTages] = useState("");

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <h2 className="text-lg font-semibold">Create Note</h2>
            <input type="text" placeholder="Title" className="w-full border p-2 rounded" value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <textarea placeholder="Content" className="w-full border p-2 rounded" value={note} onChange={(e) => { setNote(e.target.value) }} />
            <input type="text" placeholder="Tags (e.g. #work)" className="w-full border p-2 rounded" value={tags} onChange={(e) => { setTages(e.target.value) }} />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Save Note
            </button>
        </form>
    );
};

export default CreateNoteForm;
