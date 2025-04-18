import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateNoteForm = ({ onNoteSaved }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newNote = {
      title: title,
      note: note,
      // Split tags by comma and trim whitespace
      tags: tags.split(',').map(tag => tag.trim()), 
    };

    try {
      // Replace with API endpoint for notes
      const response = await fetch('/api/notes', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Note saved successfully:', data);
        toast.success('Note saved successfully!');
        if (onNoteSaved) {
          onNoteSaved(data);
        }
        setTitle("");
        setNote("");
        setTags("");
      } else {
        console.error('Failed to save note:', response.status);
        const errorData = await response.json();
        console.error('Error details:', errorData);
        toast.error('Failed to save note.');
        
      }
    } catch (error) {
      console.error('There was an error sending the request:', error);
      toast.error('An unexpected error occurred.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-lg font-semibold">Create Note</h2>
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
        />
        <textarea
          placeholder="Content"
          className="w-full border p-2 rounded"
          value={note}
          onChange={(e) => { setNote(e.target.value) }}
        />
        <input
          type="text"
          placeholder="Tags (e.g. #work, #personal)"
          className="w-full border p-2 rounded"
          value={tags}
          onChange={(e) => { setTags(e.target.value) }}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Note
        </button>
      </form>
      
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default CreateNoteForm;