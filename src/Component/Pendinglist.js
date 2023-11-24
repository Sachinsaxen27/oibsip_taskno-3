import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './ToDostyle.css'
function Pendinglist() {
    const history=useNavigate()
    const todolist = useSelector(state => state.task || [])
    const handleopen = (event) => {
        history("/todoitem", { state: event })
    }
    let i=0
    return (
        <> 
        <div className='todolist'>
        <h2>Your Pending List</h2>
        &nbsp;
        {todolist.length===0&&<div className="card text-center mt-5 mb-3 no-content">
            <p className="h1 ">OOPS!!!</p>
            <p>Currently no data found please add a ToDo</p>
        </div>}
            {todolist?.map((element, index) => {
                if(element.status==="Incomplete"){
                    i++
                return <div className='todohover' key={index} >
                    <li className='d-flex justify-content-between my-1 list-todo' onClick={() => handleopen(element)}>
                        <span className='list-one'>{i}</span>
                        <span >{(element.task).slice(0, 25)}{(element.task).length > 25 && "..."}</span>
                        <span className='list-image'>
                            {element.status === 'Incomplete' ? <i className="fa-regular fa-circle fa-lg" style={{ color: "#000000" }}></i> : <i className="fa-solid fa-circle-check fa-lg" style={{ color: "#4bd85c" }}></i>}
                        </span>
                    </li>
                </div>
                }
                else{
                    return null
                }
            })}
        </div>
        </>
    )
}

export default Pendinglist