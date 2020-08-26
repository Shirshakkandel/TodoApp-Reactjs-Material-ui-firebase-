import React, {useState} from 'react';//useState is short term memory like variable
import {Button,FormControl,Input,InputLabel} from '@material-ui/core';
import Todo from './Todo'


import './App.css';

function App() {
  const [todos,setTodos]= useState(['Take dogs for a walk','Take a rubbish out', 'Make shirshak Ceo']);
  const [input,setInput]= useState('');
  console.log(input)
  const addTodo = (event) =>{
    //this will fire when we click button
     event.preventDefault();
    setTodos([...todos,input])
    setInput('')

  }
  return (
    <div className="App">
      <h1>Hello world</h1>
      <form>
      <FormControl>
        <InputLabel> Write a Todo</InputLabel>
        <Input value={input} onChange= {(event)=>setInput(event.target.value)}/>
      </FormControl>

      <Button type="submit" disabled={!input} onClick={addTodo} variant="contained" color="primary">
        Add Todo
      </Button>
      
      </form>

      <ul>
        {todos.map(todo=> (
          <Todo text={todo} />
           //  <li>{todo}</li>   
          
          ) )}
          
      </ul>
      {/*  */}
    </div>
  );
}

export default App;
