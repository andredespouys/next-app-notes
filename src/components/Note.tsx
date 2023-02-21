
export default function Note(props:any){

    return (
    <div>
        <h3 onClick={()=>{props.onClick(props.id) } } >{props.title}</h3>
        <p>{props.text}</p>
    </div>
    )
}
