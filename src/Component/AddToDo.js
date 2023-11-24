import React, { useEffect, useState } from 'react'
import './ToDostyle.css'
import { bindActionCreators } from 'redux';
import { actionCreator } from '../State';
import { useDispatch } from 'react-redux';
import {v4 as uuid} from 'uuid'
function AddToDo() {
    let uni_ID=uuid()
    let small_id = uni_ID.slice(0, 8);
    const currentDateTime =( new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear())
    const [arraytodo,setmyarraytodo]=useState([])
    const [task,setmyTask]=useState('')
    const handlechange=(event)=>{
        setmyTask(event.target.value)
    }
    const dispatch=useDispatch()
    const {Add_Todo}=bindActionCreators(actionCreator,dispatch)
    const hanlesubmit=()=>{
        setmyarraytodo([...arraytodo,{task, status: "Incomplete",date:currentDateTime,ID:small_id}])
        setmyTask('')
    }
    useEffect(()=>{
        if(arraytodo.length>0){
            Add_Todo(arraytodo)
            setmyarraytodo([])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[arraytodo])
    return (
        <>
            <div className='addTODO'>
                <h4 style={{display:'grid',justifyContent:'center',margin:'0 auto'}}>Add ToDo</h4>
                <form className='formToDo'>
                    <input className='addinput' type="text" name='title' value={task} onChange={handlechange} placeholder='Your task' />
                    <button className='addbutton' type="button" onClick={hanlesubmit}>Add</button>
                </form>
            </div>
        </>
    )
}

export default AddToDo