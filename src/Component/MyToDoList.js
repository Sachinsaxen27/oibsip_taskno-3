import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './ToDostyle.css'
// import { v4 as uuid } from 'uuid'
import {useNavigate } from 'react-router-dom'
function MyToDoList() {
    let i = 0
    const todolist = useSelector(state => state.task || [])
    const [filterStatus, setFilter] = useState('All')
    const handleclick = () => {
        let list = document.getElementById('filterlist')
        if (list.style.display === 'none') {
            list.style.display = 'grid'
        }
    }
    useEffect(() => {
        let list = document.getElementById('filterlist')
        if (list?.style) {

            if (filterStatus !== 'Filter') {
                list.style.display = 'none'
            }
        }
    }, [filterStatus])
    let history = useNavigate()
    const handleopen = (event) => {
        history("/todoitem", { state: event })
    }
    return (
        <>
            <div className='todolist'>
                <h2>Your ToDo List</h2>
                {todolist.length > 0 ? <div className='mx-3 my-3 list-filters'>
                    <span className='mx-1' style={{ display: 'grid', alignItems: 'center' }}>Filter :</span> <input readOnly name="list" id="list" value={filterStatus} style={{ width: '6rem' }} onClick={handleclick} />
                    <ul className="list-group" id='filterlist'>
                        <li name='All' onClick={() => { setFilter("All") }}>All</li>
                        <li name='Complete' onClick={() => { setFilter("Complete") }}>Complete</li>
                        <li name='Incomplete' onClick={() => { setFilter("Incomplete") }}>Incomplete</li>
                    </ul>
                </div> : <div className="card text-center mt-5 mb-3 no-content">
                    <p className="h1 ">OOPS!!!</p>
                    <p>Currently no data found please add a ToDo</p>
                </div>}
                {filterStatus === "All" && todolist?.map((element, index) => {
                    return <div className='todohover ' key={index} >
                        <li className='d-flex justify-content-between my-1 list-todo' onClick={() => handleopen(element)}>
                            <span className='list-one'>{index + 1}</span>
                            <span >{(element.task).slice(0, 25)}{(element.task).length > 25 && "..."}</span>
                            <span className='list-image'>
                                {element.status === 'Incomplete' ? <i className="fa-regular fa-circle fa-lg" style={{ color: "#000000" }}></i> : <i className="fa-solid fa-circle-check fa-lg" style={{ color: "#4bd85c" }}></i>}
                            </span>
                        </li>
                    </div>
                })}
                {filterStatus === "Complete" && todolist?.map((element, index) => {
                    if (element.status === 'Complete') {
                        i++
                        return <div className='todohover ' key={index}>
                            <li className='d-flex justify-content-between my-1 list-todo' onClick={() => handleopen(element)}>
                                <span className='list-one'>{i}</span>
                                <span >{(element.task).slice(0, 25)}{(element.task).length > 25 && "..."}</span>
                                <span className='list-image'>
                                    <i className="fa-solid fa-circle-check fa-lg" style={{ color: "#4bd85c" }}></i>
                                </span>
                            </li>
                        </div>
                    }
                    else {
                        return null
                    }
                })}
                {filterStatus === "Incomplete" && todolist?.map((element, index) => {
                    if (element.status === 'Incomplete') {
                        i++
                        return <div className='todohover' key={index} >
                            <li className='d-flex justify-content-between my-1 list-todo' onClick={() => handleopen(element)}>
                                <span className='list-one'>{i}</span>
                                <span >{(element.task).slice(0, 25)}{(element.task).length > 25 && "..."}</span>
                                <span className='list-image'>
                                    <i className="fa-regular fa-circle fa-lg" style={{ color: "#000000" }}></i>
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

export default MyToDoList