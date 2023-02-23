"use client"
import React from "react";
import { useState } from "react";
import InputArea from "./InputArea";
import Note from "./Note";
import Nav from "./Nav";
function App() {


  const [notes, setNotes]:any[] = useState([]);
  const [show, setShow]= useState(false);


  function addNote(note:any){
    setNotes((prevNotes:any) =>  [...prevNotes, note])
    console.log(notes);
  }

   function deleteItem(id:any){
    setNotes((prevValue:any) => prevValue.filter((item:any,index:any) => index !== id))
    // setNotes(prevValue => prevValue.remove(id));
  }
  function hideDivs(event:any){
    event.preventDefault();
      //Here we set show to true
      setShow(false);
    }

    function showDiv(event:any){
      event.stopPropagation();
      event.preventDefault();
        //Here we set show to true
      setShow(true);
      }

  return (
      <main className="h-full" onClick={hideDivs}>
      <Nav/>
      <InputArea onAdd={addNote} showDivs={show} letDivShow={showDiv}/>
      <div className="bg-red-500 w-full ">
        <ul className="flex space-x-4 ">
            {notes.map((note:any,index:any) =>
            // console.log(note[index])
               <Note key={index} id={index} title={note.title} text={note.text} onClick={deleteItem} />
               )}

        </ul>
      </div>
    </main>
  );
}

export default App;
