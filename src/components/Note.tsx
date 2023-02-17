
export default function Note(props:any){

    return (
        <div onClick={()=>{props.onClick(props.id) } }>
            <li>{props.value}</li>
        </div>
        
    )
}