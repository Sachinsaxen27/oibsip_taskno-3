// import logo from './logo.svg';
import { useState } from 'react';
// import './App.css';
import Navbar from './Component/Navbar';
import WelcomePage from './Component/WelcomePage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddToDo from './Component/AddToDo';
import MyToDoList from './Component/MyToDoList';
import TodoItem from './Component/TodoItem';
import Edittodo from './Component/Edittodo';
import Pendinglist from './Component/Pendinglist';
function App() {
  const [state,setMystate]=useState(true)
  setTimeout(()=>{
    setMystate(false)
  },1000)

  return (
    <>
    <Router>
      {state===false&&<Navbar/>}
      {state===true&&<WelcomePage/>}
      {state===false&&<Routes>
        <Route exact path='/addtodo' element={<AddToDo/>}></Route>
        <Route exact path='/yourTodo' element={<MyToDoList/>}></Route>
        <Route exact path='/todoitem' element={<TodoItem/>}></Route>
        <Route exact path='/edittodo' element={<Edittodo/>}></Route>
        <Route exact path='/pending' element={<Pendinglist/>}></Route>
      </Routes>}
    </Router>
    </>
  );
}

export default App;
