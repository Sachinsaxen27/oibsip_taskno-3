import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AddToDo from './AddToDo'
function Navbar() {
    const location=useLocation()
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/addtodo">Your TODO</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">    
                                <Link className="nav-link active" aria-current="page" to="/addtodo">Add ToDo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/yourTodo">ToDo List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pending">Pending List</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {location.pathname==='/'&&<AddToDo/>}
        </>
    )
}

export default Navbar