// src/components/Forms/CreateTodoForm.jsx
import React from "react";

const CreateTodoForm = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <h2 className="text-lg font-semibold">Add To-Do</h2>
            <input type="text" placeholder="Task" className="w-full border p-2 rounded" />
            <input type="date" className="w-full border p-2 rounded" />
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                Add Task
            </button>
        </form>
    );
};

export default CreateTodoForm;
