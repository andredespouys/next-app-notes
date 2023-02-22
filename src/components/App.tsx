"use client"
import React from "react";
import { useState } from "react";
import InputArea from "./InputArea";
import Note from "./Note";
function App() {


  const [notes, setNotes]:any[] = useState([])



  function addNote(note:any){
    setNotes((prevNotes:any) =>  [...prevNotes, note])
    console.log(notes);
  }

   function deleteItem(id:any){
    setNotes((prevValue:any) => prevValue.filter((item,index:any) => index !== id))
    // setNotes(prevValue => prevValue.remove(id));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addNote}/>
      <div className="bg-red-500 w-full ">
        <ul className="flex space-x-4 ">
            {notes.map((note:any,index:any) =>
            // console.log(note[index])
               <Note key={index} id={index} title={note.title} text={note.text} onClick={deleteItem} />
               )}

        </ul>
      </div>
    </div>
  );
}

export default App;
