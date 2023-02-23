import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import TextArea from "./TextArea";
import Stack from '@mui/material/Stack';


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
    setNote({
      title:"",
      text: ""
    })
  }



    return(
        <Stack
        component="form"
        className="w-3/6 mx-auto text-center align-middle justify-center"
        spacing={2}
        noValidate
        autoComplete="off">
        <div onClick={props.letDivShow} className="w-3/6 my-10 text-white mx-auto flex flex-col">

            <Input show={props.showDivs} onChange= {manageChange} value={note.title} name="title" placeholder="Note© title" type="text"/>
            <TextArea onChange= {manageChange} value={note.text} name="text"  />
            <Button show={props.showDivs} type="Add" onclick= {addNote}  />
        </div>
        </Stack>
    )
}
