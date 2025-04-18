import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateTodoForm = ({ onTodoAdded }) => {
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newTodo = {
            Task: task,
            Date: date,
        };

        try {
            // Replace with  API endpoint for todos
            const response = await fetch('/api/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTodo),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('To-do added successfully:', data);
                toast.success('To-do added successfully!');
                if (onTodoAdded) {
                    onTodoAdded(data);
                }
                setTask("");
                setDate("");
            } else {
                console.error('Failed to add to-do:', response.status);
                try {
                    const errorData = await response.json();
                    console.error('Error details:', errorData);
                    toast.error(`Failed to add to-do: ${errorData?.message || response.statusText}`);
                } catch (error) {
                    console.error('Error parsing error response:', error);
                    toast.error('Failed to add to-do.');
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
                <h2 className="text-lg font-semibold">Add To-Do</h2>
                <input
                    type="text"
                    placeholder="Task"
                    className="w-full border p-2 rounded"
                    value={task}
                    onChange={(e) => { setTask(e.target.value) }}
                />
                <input
                    type="date"
                    className="w-full border p-2 rounded"
                    value={date}
                    onChange={(e) => { setDate(e.target.value) }}
                />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                    Add Task
                </button>
            </form>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
};

export default CreateTodoForm;