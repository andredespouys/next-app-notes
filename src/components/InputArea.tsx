import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import TextArea from "./TextArea";
import Note from "./Note";


export default function InputArea(props:any){

  const [note, setNote] = useState({
    title:"",
    text:""
  });

  function manageChange(event:any){
    const {name, value} = event.target;

      setNote(prevNote => {
        return{
          ...prevNote,
          [name]: value}});
    }



  function addNote(event:any){
    event.preventDefault();
    console.log(note);
    props.onAdd(note);
  }

    return(
      <div>
        <div className="block">
            <Input onChange= {manageChange} value={note.title} name="title" placeholder="Note title" type="text"/>
            <TextArea onChange= {manageChange} value={note.text} name="text"/>
            <Button type="Add" onclick= {addNote}  />
        </div>

      </div>


    )
}
