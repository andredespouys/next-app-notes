"use client"
import React from "react";
import { useState } from "react";
import InputArea from "./InputArea";
import Note from "./Note";
import Nav from "./Nav";
function App() {


  const [notes, setNotes] = useState([]);
  const [show, setShow]= useState(false);


  function addNote(note){
    setNotes((prevNotes) =>  [...prevNotes, note])
    console.log(notes);
  }

   function deleteItem(id){
    setNotes((prevValue) => prevValue.filter((item,index) => index !== id))
    // setNotes(prevValue => prevValue.remove(id));
  }
  function hideDivs(event){
    event.preventDefault();
      //Here we set show to true
      setShow(false);
    }

    function showDiv(event){
      event.stopPropagation();
      event.preventDefault();
        //Here we set show to true
      setShow(true);
      }

  return (
    <main className="h-full" onClick={hideDivs}>
      <Nav/>
      <InputArea onAdd={addNote} showDivs={show} letDivShow={showDiv}/>
      <div className=" w-5/6 mx-auto">
        <ul className="flex space-x-4 ">
            {notes.map((note,index) =>
            // console.log(note[index])
               <Note key={index} id={index} title={note.title} text={note.text} onClick={deleteItem} />
               )}

        </ul>
      </div>
    </main>
  );
}

export default App;
