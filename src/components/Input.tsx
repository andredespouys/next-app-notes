import TextField from '@mui/material/TextField';

export default function Input(props:any){
    return (
        <TextField
            sx={{ input: { color: 'white' }}}
              className={props.show ? "block" : "hidden"}
              value={props.value}
              onChange={props.onChange}
              name={props.name}
              type={props.type}
              fullWidth
              id="fullWidth"

              placeholder="Title"
              variant="standard"
            />
        )
}
