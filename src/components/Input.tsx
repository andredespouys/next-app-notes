export default function Input(props:any){
    return (
        <input value={props.value} onChange={props.onChange} name={props.name} type={props.type} />
    )
}
