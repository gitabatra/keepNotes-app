import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
// import { getNoteColor } from "../util/data"

function Note(props) {
  // console.log("Note id: ",props.id);
  // const currentNote = getNoteColor(props.id);
  // console.log("Selected color in Note: ",props.color,currentNote.color)
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note"  style={{backgroundColor: props.color}}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick} style={{background:"transparent"}}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
