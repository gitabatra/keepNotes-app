import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { getDataFromLocalStorage } from "../util/data";


function App() {
  const [notes, setNotes] = useState(getDataFromLocalStorage());
  const colors = ['#fef08a','#d9f99d','#a3e635','#a7f3d0','#99f6e4','#22d3ee','#a5b4fc','#d8b4fe','#f0abfc','#fda4af','#fb923c','#ffffff']
  const [selectedColor, setColor] = useState("#fff");

  function addNote(newNote) {
    let noteId = 0;
    noteId = "note-" + (notes.length).toString();
  
    const note = {
      id: noteId,
      title: newNote.title,
      content: newNote.content,
      color: newNote.color
    }
    setNotes([...notes, note]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return noteItem.id !== id;
      });
    });
  }

  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes));
  },[notes]);

  return (
    <div>
      <Header />
      <div id="wrapper" className="color-list" style={{marginTop: "10px"}}>
        {colors.map((color,index)=> {
        return ( <div key={index} 
        style={{
        display:"inline-flex",
        marginRight:"10px",
        width:"20px",
        height:"20px",
        borderRadius:"50%",
        backgroundColor: color}}
        onClick={()=>{setColor(color)}}>
        </div> )})}
      </div>
      <CreateArea onAdd={addNote} selectedColor={selectedColor}/>
      
      {(notes !== "") ?
        notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            color={noteItem.color}
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
