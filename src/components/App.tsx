import React from 'react';
import TodoContext from '../contexts/TodoContext';
import Navbar from './Navbar';
import TodoList from './TodoList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import AddTodo from './AddTodo';

import fundo from '../assets/images/fundo.svg'

import '../global.css'
import Footer from './Footer';

const  App = () => {
    return (
        <TodoContext>
            <Router>
                <Navbar></Navbar>
                <br />
                <div className='uk-container'>

                    <div className="background-img">
                        <img src={fundo} alt=""/>
                    </div>
                    
                    <Switch>
                        <Route path="/create">
                            <AddTodo></AddTodo>
                        </Route>
                        <Route path="/">
                            <h4>Minha lista de tarefas</h4>
                            <TodoList></TodoList>
                        </Route>
                    </Switch>
                </div>
            </Router>
            <Footer></Footer>
        </TodoContext>
    );
}


export default App;