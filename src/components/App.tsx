import React from 'react';
import Navbar from './Navbar';
import TodoList from './TodoList';
 
const  App = () => {
    return (
        <div className='uk-container'>
            <Navbar></Navbar>
            <TodoList></TodoList>
            <h1>Meu primeiro App</h1>
        </div>
    );
}

export default App;