import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [list, setList] = useState([]);
  function addItem(newNote) {
    setList((preValue) => {
      return [...preValue, newNote];
    });
  }
  function deleteItem(id) {
    setList((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addItem} />
      {list.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            delete={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
