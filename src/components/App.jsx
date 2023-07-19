import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
import Form from "./Form";

const isRegistered = true;
const isLoggedIn = false;

function App() {
    return (
        <div>
            <Header />
            {isLoggedIn ? notes.map(note => (
                <Note
                    key={note.key}
                    title={note.title}
                    content={note.content}
                />
            )) : <Form isRegistered={isRegistered}/>}
            <Footer />
        </div>
    );
}

export default App;