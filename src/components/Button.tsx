export default function Button (props:any){
    return <button onClick={props.onclick }>
    <span>{props.type}</span>
  </button>
}