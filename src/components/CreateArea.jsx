import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  function handleClick(){
    setExpanded(true);
  }
  
  const [note, setNote] = useState({
    title: "",
    content: "",
    color: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
   note.color = props.selectedColor
   props.onAdd(note);
    setNote({
      title: "",
      content: "",
      color: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note" style={{backgroundColor: `${props.selectedColor}`}}>
       {isExpanded && (<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        
          autoFocus
        />)}
        <textarea
          name="content"
          // style={{backgroundColor: `${props.selectedColor}`}}
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded? 3 : 1}
        />
        <Zoom in={isExpanded}>
        <Fab sx={{":hover": {backgroundColor: "#8b5cf6"}}} onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
