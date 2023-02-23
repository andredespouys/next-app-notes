export default function Button (props:any){
    return <button className={props.show ? "block" : "hidden"} onClick={props.onclick }>
    <span>{props.type}</span>
  </button>
}
