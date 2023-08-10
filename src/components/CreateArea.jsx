import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import  Color  from "./Color";


function CreateArea(props) {
  const colors = ['#d9f99d','#99f6e4','#a5b4fc','#d8b4fe','#f0abfc','#fda4af']
  const [isExpanded, setExpanded] = useState(false);

  function handleClick(){
    setExpanded(true);
  }
  
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    // setNote(()=>{return {[name]:value}})

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
   console.log("Note data from createNote: ",note);
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
      {/* <div  className="color-pick"> */}
      <div id="wrapper" className="color-list">
        {colors.map((color,index)=> {return (<Color key={index} color={color}/>)})}
      </div>
      {/* </div> */}
       {isExpanded && (<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          autoFocus
        />)}
        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded? 3 : 1}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
