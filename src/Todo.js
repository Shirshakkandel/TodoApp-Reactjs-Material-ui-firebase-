    import React, { useState } from 'react'
    import './Todo.css'
    import {List,ListItem, ListItemAvatar, ListItemText, Button, Modal, makeStyles, Input } from '@material-ui/core'
    import db from './firebase'
    import DeleteIcon from '@material-ui/icons/Delete';

    const useStyles = makeStyles(theme => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));



    function Todo(props) 
    {
        const [open,setOpen]= useState(false);
        const classes= useStyles();
        const [input,setInput] = useState('');

        const handleOpen= ()=>
         {
            setOpen(true);
         }

    const updateTodo = () =>{
        //update the todo with the new input text
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge:true})
        
        setOpen(false)
    }
        return (
            <>
            <Modal open={open} onClose={e => setOpen(false)}>
            <div className={classes.paper}>
                <h1>I am a modal</h1>
                <Input placeholder= {props.todo.todo} value={input} onChange={event=>setInput(event.target.value)}></Input>
                <Button onClick={updateTodo}>Update Todo</Button>
                <Button onClick={e=>setOpen(false)}>Close </Button>

            </div> 
            </Modal>


            <List className="todo__list">
                <ListItem>
               
                    <ListItemText primary={props.todo.todo} secondary="Dummy deadline ⏰⏰⏰"/>
                    
                </ListItem>
                
                <button onClick={e=> setOpen(true)}>Edit</button>

                <Button onClick={event=> 
                db.collection('todos').doc(props.todo.id).delete()}
                > 9i<DeleteIcon/> Delete Me
                </Button>
            </List>
            </>
        )
    }

    export default Todo
