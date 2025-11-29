import { useState } from "react"
import "./style.css"
function CreateArea(props){
    const [note,setNote]=useState({
        title:"",
        content:""
        
    })
    function submitNote(event){
        props.onAdd(note)
        setNote({
            title:"",
            content:""
        });
event.preventDefault();
    }
    function handlechange(event){
 const {name,value}=event.target
 setNote(prev=>{
 return {
    ...prev,
 [name]:value
 };}
 );
    }
    
    return (
    <div>
        <form>
            <div className="note">
            <input onChange={handlechange} name ="title" value={note.title} placeholder="Title"></input>
            <textarea  onChange={handlechange}name ="content"value={note.content} placeholder="Take a note"></textarea>
            <button onClick={submitNote}>Add</button>
            
            </div>
        </form>
    </div>
    )
}
export default CreateArea