import "./style.css" 
import "./student" 
function Data(props){
    function handleClick(){
        props.onDelete(props.id)
    }
return <div className="data">
    <h1 >{props.title}</h1>
    <p>{props.content}</p>
    <button onClick={handleClick}>Delete</button>
</div>
}
export default Data;