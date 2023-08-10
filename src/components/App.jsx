import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { getDataFromLocalStorage } from "../util/data";


function App() {
  const [notes, setNotes] = useState(getDataFromLocalStorage());
  if(notes !== []){
    console.log("Notes: ",notes);
  } else{
    console.log("Notes not null : ",notes);
  }
 

  function addNote(newNote) {
    let noteId = 0;
    noteId = "note-" + (notes.length).toString();
  
    const note = {
      id: noteId,
      title: newNote.title,
      content: newNote.content
    }
    console.log("new Note: ",note);
    setNotes([...notes, note]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes));
  },[notes]);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      
      {(notes !== "") ?
        notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      }): ""
      } 
      <Footer />
    </div>
  );
}

export default App;
