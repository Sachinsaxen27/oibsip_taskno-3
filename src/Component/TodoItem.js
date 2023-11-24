import React from 'react'
import { useDispatch } from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {actionCreator} from '../State'
function TodoItem() {
    // Delete_ToDO
    const dispatch=useDispatch()
    const {Delete_Todo}=bindActionCreators(actionCreator,dispatch)
    let location=useLocation()
    let history=useNavigate()
    const handleedit=()=>{
        history("/edittodo",{state:location.state})
    }
    const handledelete=()=>{
        Delete_Todo(location.state.ID)
        history('/yourTodo')
    }
    return (
        <>
            <div className="card text-center" style={{ width: '20rem', margin: '120px auto', border: '3px solid blue', height: "14rem" }}>
                <div className="card-header" style={{ borderRadius: "0px", backgroundColor: 'blue', color: "white" }}>
                    Your ToDo
                </div>
                <div className='my-4' style={{ display: 'grid', width: '15rem', margin: "0 auto" }}>
                    <div className='itemtodo'>Task: <span className="mx-2">{location.state.task}</span></div>
                    <div className='itemtodo'> Status:<span className="mx-2">{location.state.status}</span></div>
                    <div className='itemtodo'>Created At:<span className="mx-2">{location.state.date}</span></div>
                </div>
                <div className='d-flex justify-content-evenly'>
                    <button className="btn btn-primary" style={{ widt: "72px" }} onClick={handleedit}>Edit</button>
                    <button className="btn btn-primary" style={{ widt: "72px" }}onClick={handledelete}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default TodoItem