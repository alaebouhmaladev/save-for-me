import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import NoteCard from "../../components/Cards/NoteCard";
import TodoCard from "../../components/Cards/TodoCard";
import ContactCard from "../../components/Cards/ContactCard";
import { MdAdd } from "react-icons/md";
import SideBarMenu from "../../components/SideBar/SideBarMenu";
import Modal from "../../components/Common/Modal";
import CreateNoteForm from "../../components/Forms/CreateNoteForm";
import CreateTodoForm from "../../components/Forms/CreateTodoForm";
import CreateContactForm from "../../components/Forms/CreateContactForm";

const Home = () => {
    const [selected, setSelected] = useState("notes");
    const [showPopup, setShowPopup] = useState(false);
    const [modalType, setModalType] = useState(null); // 'note' | 'todo' | 'contact'

    const togglePopup = () => setShowPopup((prev) => !prev);
    const openModal = (type) => {
        setModalType(type);
        setShowPopup(false);
    };
    const closeModal = () => setModalType(null);

    // Example note for rendering
    const note = {
        title: "Meeting on 7TH April",
        date: "3rd Apr 2024",
        content: "Meeting on 7TH April",
        tags: "#Meeting",
        isPinned: true,
        onEdit: () => {},
        onDelete: () => {},
        onPinNote: () => {},
    };

    // Example to-do list
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Buy groceries",
            dueDate: "Today",
            isCompleted: false,
            isPinned: true,
        },
        {
            id: 2,
            title: "Finish portfolio site",
            dueDate: "Due: 15 Apr",
            isCompleted: false,
            isPinned: false,
        },
        {
            id: 3,
            title: "Call Alice",
            dueDate: "Tomorrow",
            isCompleted: true,
            isPinned: false,
        },
    ]);

    const toggleComplete = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        );
    };

    return (
        <>
            <NavBar />

            <div className="flex">
                <SideBarMenu onSelect={setSelected} active={selected} />

                <div className="flex-1 p-6 overflow-y-auto">
                    {/* Notes Section */}
                    {selected === "notes" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <NoteCard key={index} {...note} />
                            ))}
                        </div>
                    )}

                    {/* To-Do Section */}
                    {selected === "todo" && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">To-Do List</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {todos.map((todo) => (
                                    <TodoCard
                                        key={todo.id}
                                        title={todo.title}
                                        dueDate={todo.dueDate}
                                        isCompleted={todo.isCompleted}
                                        isPinned={todo.isPinned}
                                        onToggleComplete={() => toggleComplete(todo.id)}
                                        onEdit={() => console.log("Edit", todo.id)}
                                        onDelete={() => console.log("Delete", todo.id)}
                                        onPinTodo={() => console.log("Pin", todo.id)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Contacts Section */}
                    {selected === "contacts" && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Contacts</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                <ContactCard
                                    name="Alice Johnson"
                                    email="alice@example.com"
                                    onEdit={() => console.log("Edit Alice")}
                                    onDelete={() => console.log("Delete Alice")}
                                />
                                <ContactCard
                                    name="Mark Lee"
                                    phone="+1234567890"
                                    onEdit={() => console.log("Edit Mark")}
                                    onDelete={() => console.log("Delete Mark")}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Floating Add Button and Popup Menu */}
            <div className="absolute right-10 bottom-10 z-50">
                <button
                    type="button"
                    className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-700 text-white shadow-lg"
                    title="Add Item"
                    aria-label="Add Item"
                    onClick={togglePopup}
                >
                    <MdAdd className="text-[32px] text-white" />
                </button>

                {showPopup && (
                    <div className="absolute bottom-20 right-0 w-48 bg-white border border-gray-200 rounded-md shadow-xl text-sm">
                        <button
                            onClick={() => openModal("note")}
                            className="w-full text-left px-4 py-2 hover:bg-blue-50"
                        >
                            📝 Create Note
                        </button>
                        <button
                            onClick={() => openModal("todo")}
                            className="w-full text-left px-4 py-2 hover:bg-blue-50"
                        >
                            ✅ Add To-Do
                        </button>
                        <button
                            onClick={() => openModal("contact")}
                            className="w-full text-left px-4 py-2 hover:bg-blue-50"
                        >
                            📇 Save Contact
                        </button>
                    </div>
                )}
            </div>

            {/* Modal to Create Note / Todo / Contact */}
            <Modal isOpen={!!modalType} onClose={closeModal}>
                {modalType === "note" && <CreateNoteForm onSubmit={closeModal} />}
                {modalType === "todo" && <CreateTodoForm onSubmit={closeModal} />}
                {modalType === "contact" && <CreateContactForm onSubmit={closeModal} />}
            </Modal>
        </>
    );
};

export default Home;
