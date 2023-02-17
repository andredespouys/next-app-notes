import React from "react";
import { useState } from "react";
import InputArea from "./InputArea";
import Note from "./Note";
"use client"
function App() {

  const [note, setNote] = useState(""); 
  const [notes, setNotes] = useState([]);


  
  function manageChange(event){
    const value = event.target.value;
    setNote(value);
  }
  function addNote(){
    setNotes((prevNotes => {
      return [ ...prevNotes, note ]
    }));
    setNote("");    
  }
  function deleteItem(id){
    setNotes(prevValue => prevValue.filter((item,index) => index !== id))
    // setNotes(prevValue => prevValue.remove(id));
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
      <InputArea onchange= {manageChange} inputValue={note} onclick={addNote}/>
      </div>
      <div>
        <ul>
            {notes.map((note, index) =>
            <Note key={index} id={index}value={note} onClick={deleteItem}/>
            )}

        </ul>
      </div>
    </div>
  );
}

export default App;
