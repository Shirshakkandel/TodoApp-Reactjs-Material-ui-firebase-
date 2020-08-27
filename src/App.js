import React, {useState, useEffect} from 'react';//useState is short term memory like variable
import {Button,FormControl,Input,InputLabel} from '@material-ui/core';
import Todo from './Todo'
import db from "./firebase"
import firebase from 'firebase'

import './App.css';
function App() 
{

  const [todos,setTodos]= useState([]);
  const [input,setInput]= useState('');

  //when the app loads, we need to listen to database and fetch new todos as they get added/removed
  useEffect(()=>
  {
    //fires when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot=> {    
      setTodos(snapshot.docs.map(doc=>({id:doc.id, todo:doc.data().todo})))

    })

  },[]);
  console.log(input)

  const addTodo = (event) =>
   {
    //this will fire when we click button
     event.preventDefault();
     db.collection('todos').add({
       todo:input,
       timestamp:firebase.firestore.FieldValue.serverTimestamp()
     })
    setTodos([...todos,input])
    setInput('')

  }
  return (
    <div className="App">
      <h1>Hello world</h1>
      <form>
      <FormControl>
        <InputLabel> <span>✅</span>  Write a Todo</InputLabel>
        <Input value={input} onChange= {(event)=>setInput(event.target.value)}/>
      </FormControl>
      <Button type="submit" disabled={!input} onClick={addTodo} variant="contained" color="primary">
        Add Todo
      </Button>
    
      </form>
      <ul>
        {todos.map(todo=> (
          <Todo todo={todo}  />
           //  <li>{todo}</li>   
          
          ) )}
          
      </ul>
      {/*  */}
    </div>
  );
}

export default App;
