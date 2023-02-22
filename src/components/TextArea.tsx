export default function TextArea(props:any) {
  return(
    <textarea onChange={props.onChange} name={props.name} value={props.value} rows="3" placeholder="Text" />
  )

}
