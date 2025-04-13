import React from "react";
import NavBar from "../../components/NavBar";
import NoteCard from "../../components/Cards/NoteCard";

const Home = () => {
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

    return (
        <>
            <NavBar />
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                    <NoteCard {...note} />
                    <NoteCard {...note} />
                    <NoteCard {...note} />
                    <NoteCard {...note} />
                    <NoteCard {...note} />
                    <NoteCard {...note} />
                    <NoteCard {...note} />
                    <NoteCard {...note} />
                    <NoteCard {...note} />
                    <NoteCard {...note} />
                    <NoteCard {...note} />
                </div>
            </div>

            <button
                type="button"
                className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-700 text-white absolute right-10 bottom-10 shadow-lg"
                title="Add Note"
                aria-label="Add Note"
            >
                +
            </button>
        </>
    );
};

export default Home;
