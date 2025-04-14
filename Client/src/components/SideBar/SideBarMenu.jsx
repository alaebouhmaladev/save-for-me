import React from "react";
import { MdNote, MdChecklist, MdContacts } from "react-icons/md";

const SideBarMenu = ({ onSelect, active }) => {
    const menuItems = [
        { id: "notes", label: "Notes", icon: <MdNote size={24} /> },
        { id: "todo", label: "To-Do", icon: <MdChecklist size={24} /> },
        { id: "contacts", label: "Contacts", icon: <MdContacts size={24} /> },
    ];

    return (
        <div className="h-screen w-64 bg-white text-blue-950 flex flex-col py-6 px-4 drop-shadow-md">
            <nav className="flex flex-col gap-4">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onSelect(item.id)}
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-all ${
                            active === item.id
                                ? "bg-blue-300"
                                : "hover:bg-gray-300"
                        }`}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default SideBarMenu;
