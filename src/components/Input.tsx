export default function Input(props:any){
    return (
        <input className="" value={props.value} onChange={props.onChange} name={props.name} type={props.type} placeholder="Title"/>
    )
}
