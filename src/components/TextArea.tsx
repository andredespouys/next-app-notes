import TextField from '@mui/material/TextField';

export default function TextArea(props:any) {
  return(
    <TextField
        sx={{ input: { color: 'white' }}}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        hiddenLabel
        placeholder="Write your note here"
        fullWidth
        id="fullWidth"
        variant="standard"

      />

  )

}
