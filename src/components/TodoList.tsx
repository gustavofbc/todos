import React from 'react';
import { Todo } from '../models/Todo';

const TodoList = () => {
    const todos: Todo[] = [
        {id: 1, title: 'ir ao supermecado', done: false},
        {id: 2, title: 'ir a academia', done: false}
    ];

    return(
       <table className='uk-table'>
           <caption>Lista de tarefas</caption>
           <thead>
               <tr>
                   <th>#</th>
                   <th>Tarefa</th>
                   <th></th>
               </tr>
           </thead>
           <tbody></tbody>
       </table>
    );
}

export default TodoList;