import Button from '@mui/material/Button';

export default function ButtonAdd (props:any){
    return (
      <Button variant="contained" onClick={props.onclick }
       className={props.show ? "block" : "hidden"} >{props.type}</Button>
    )
}
