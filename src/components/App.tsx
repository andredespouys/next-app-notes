"use client"
import React from "react";
import { useState } from "react";
import InputArea from "./InputArea";
import Note from "./Note";

function App() {


  const [notes, setNotes]:any[] = useState([])



  function addNote(note:any){
    setNotes(prevNotes =>  [...prevNotes, note])
    console.log(notes)
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
      <InputArea onAdd={addNote}/>
      </div>
      <div>
        <ul>
            {notes.map((note:any,index:any) =>
            // console.log(note[index])
               <Note className="text-red-400" key={index} id={index} title={note.title} text={note.text} onClick={deleteItem}/>
               )}

        </ul>
      </div>
    </div>
  );
}

export default App;
