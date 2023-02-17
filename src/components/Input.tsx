export default function Input(props:any){
    return (
        <input value={props.value} onChange={props.onchange} type={props.type} />
    )
}