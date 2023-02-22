import Button from '@mui/material/Button';

export default function Note(props:any){

  function deleteItem(event:any){
    console.log(props.id);
    props.onClick(props.id);
  }
    return (
    <div className='bg-blue-500'>
      {/* onClick={()=>{props.onClick(props.id) } } */}
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <Button variant="contained" onClick={deleteItem}>Delete note</Button>

    </div>
    )
}
