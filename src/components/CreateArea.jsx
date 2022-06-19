import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  var [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });
  var [clicked,setClicked] = useState(false)
  function handelChange(e) {
    var { name, value } = e.target;
    setNewNote((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }
  function handelSubmit(e) {
    e.preventDefault();
  }
  function handelClick(){
    setClicked(true)
  }
  return (
    <div onClick={handelClick}>
      <form onSubmit={handelSubmit} className="create-note">
        <input
          name="title"
          placeholder="Title"
          onChange={handelChange}
          value={newNote.title}
          hidden={!clicked}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          onChange={handelChange}
          value={newNote.content}
          rows={clicked ? 3 : 1}
        />
        <Zoom in={clicked} >
        <Fab
          onClick={() => {
            props.addNote(newNote);
            setNewNote({
              title: "",
              content: ""
            });
          }}
        >
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
