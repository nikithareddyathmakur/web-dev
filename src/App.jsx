
import Data  from "./Data.jsx";
import Heading from "./Heading.jsx";
import "./style.css"
import student from "./student.js"
import CreateArea from "./CreateArea.jsx";
import { useState } from "react";

{/*

function createList(s) {
  return (
    <List
      key={s.id}
      name={s.name}
      salary={s.salary}
      age={s.age}
    />
  );
}*/}


function App() {
  const [notes,setnotes]=useState([]);
 function addNote(newnote){
  setnotes(prevnotes=>{
    return [...prevnotes,newnote]});
}
function deleteNote(id){
setnotes(prevnotes=>{
  return (prevnotes.filter((noteitem,index)=>{
    return index!==id
  }))
})
    }
  return ( 
  <div>
      <Heading></Heading>
  {/*{ student.map(n=><Data key={n.id} title= {n.title}
content={n.content}/>)}*/}
     <CreateArea onAdd={addNote}></CreateArea>
    {notes.map((n,index) =>{ 
    return<Data 
    key={index} id={index} title={n.title} content={n.content} onDelete={deleteNote}> </Data>})
    }
    </div>
  )
}

export default App
