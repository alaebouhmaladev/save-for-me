import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const TodoCard = ({ 
    title, 
    dueDate, 
    isCompleted, 
    isPinned, 
    onToggleComplete, 
    onEdit, 
    onDelete, 
    onPinTodo 
}) => {
    return (
        <div className={`p-4 rounded-lg shadow-md bg-white border-2 transition-all ${
            isPinned ? 'border-blue-900' : 'border-blue-200'
        } hover:border-blue-400`}>
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-start gap-2">
                    <input 
                        type="checkbox" 
                        checked={isCompleted} 
                        onChange={onToggleComplete} 
                        className="mt-1 cursor-pointer accent-blue-600"
                        title="Mark as complete"
                    />
                    <div>
                        <h2 className={`text-sm font-semibold ${isCompleted ? 'line-through text-gray-400' : ''}`}>
                            {title}
                        </h2>
                        {dueDate && (
                            <span className="text-xs text-slate-500">{dueDate}</span>
                        )}
                    </div>
                </div>

                <MdOutlinePushPin
                    className={`text-xl cursor-pointer ${
                        isPinned ? 'text-yellow-500' : 'text-slate-400'
                    } hover:text-yellow-600`}
                    onClick={onPinTodo}
                    title="Pin Task"
                    aria-label="Pin Task"
                />
            </div>

            <div className="flex justify-end gap-3 text-sm text-slate-600">
                <MdCreate
                    className="text-lg cursor-pointer hover:text-green-600"
                    onClick={onEdit}
                    title="Edit Task"
                    aria-label="Edit Task"
                />
                <MdDelete
                    className="text-lg cursor-pointer hover:text-red-600"
                    onClick={onDelete}
                    title="Delete Task"
                    aria-label="Delete Task"
                />
            </div>
        </div>
    );
};

export default TodoCard;
