import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props:any){

  function deleteItem(event:any){
    console.log(props.id);
    props.onClick(props.id);
  }
    return (
    <div className='border-2  w-1/6 rounded-lg p-3'>
      <Stack>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
          <div className="grid justify-items-end	w-full">
            <IconButton color="primary" aria-label="delete" onClick={deleteItem}>
        <DeleteIcon />
        </IconButton>
        </div>

      </Stack>
      {/* onClick={()=>{props.onClick(props.id) } } */}


    </div>
    )
}
