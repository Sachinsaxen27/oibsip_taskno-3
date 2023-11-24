import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {actionCreator} from '../State'
import { bindActionCreators } from 'redux'
function Edittodo() {
    const dispatch=useDispatch()
    const {Edit_Todo}=bindActionCreators(actionCreator,dispatch)
    const todolist = useSelector(state => state.task ||[])
    const location = useLocation()
    let navigate=useNavigate()
    const [updatetask,setMyupdatetask]=useState('')
    const [updatestatus,setMyupdatestatus]=useState(location.state.status)
    const handlechange=(event)=>{
        setMyupdatetask(event.target.value)
    }
    useEffect(()=>{
        setMyupdatetask(location.state.task||'')
        setMyupdatestatus(location.state.status)
    },[location.state.task,location.state.status])
    const handlesubmit=()=>{
        Edit_Todo(location.state.ID,updatetask,updatestatus)
        navigate('/yourTodo')
    }
    const handleclose=()=>{
        navigate('/todoitem',{state:location.state})
    }
    return (
        <>
            <div className="card text-center" style={{ width: '20.5rem', margin: '120px auto', border: '3px solid blue', height: "16.5rem" }}>
                <div className="card-header" style={{ borderRadius: "0px", backgroundColor: 'blue', color: "white" }}>
                    Your ToDo
                </div>
                {todolist?.map((element, index) => {
                    if(location.state.ID===element.ID){
                        return <div key={index} className='my-4' style={{ display: 'grid', width: '15rem', margin: "0 auto" }}>
                        <div className='itemtodo my-2'>Task: <input type="text" className='mx-2' name="task" onChange={handlechange} value={updatetask}/></div>
                        <div className='itemtodo my-2' style={{width:'16rem'}}> Status: <span className='mx-2'> <input type="radio" name="status" value='Complete' checked={updatestatus==='Complete'} onChange={()=>{setMyupdatestatus('Complete')}}/>Complete</span> <span className='mx-2'><input type="radio" name="status" value='Incomplete'checked={updatestatus==='Incomplete'} onChange={()=>{setMyupdatestatus('Incomplete')}}/>Incomplete</span></div>
                        <div className='itemtodo my-2'>Created At: <strong className='mx-2'> {element.date}</strong></div>
                    </div>
                    }
                    else{
                        return null
                    }  
                })
                }
                <div className='d-flex justify-content-evenly'>
                    <button className="btn btn-primary" style={{ widt: "72px" }} onClick={handlesubmit}>Submit</button>
                    <button className="btn btn-primary" style={{ widt: "72px" }} onClick={handleclose}>Close</button>
                </div>
            </div>
        </>
    )
}

export default Edittodo