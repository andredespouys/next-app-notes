import Button from "./Button";
import Input from "./Input";


export default function InputArea(props:any){
    return(
        <div>
            <Input onchange= {props.onchange} value={props.inputValue} type="text"/>
            <Button type="Add" value={props.inputValue} onclick= {props.onclick}  />
        </div>
    )
}