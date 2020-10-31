import React, { createContext } from 'react';
import { Todo } from '../models/Todo';
import { TodoContextType } from './TodoContextType';

// context é o escopo de variáveis e funções que eu tenho acesso ao longo de todo o programa!
export const TodoContext = createContext<TodoContextType>({
    todos: [
    ],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { },
});

const TodoProvider = (props: any) => {
    const todos: Todo[] = [
        {id: 1, title: 'ir ao supermecado', done: true},
        {id: 2, title: 'ir a academia', done: false}
    ];
    
    const addTodo = (title: string) => {
        console.log('Adicionou ' + title);
    }

    const removeTodo = (todo: Todo) => {
        console.log('Removeu ' + todo.title);
    }
    
    const toggle = (todo: Todo) => {
        console.log('Alterou ' + todo.title);
    }

    //o provider é o responsável por distribuir os itens (funções e variáveis) em uma única instância 
    return (
        <TodoContext.Provider value={{
            todos, addTodo, removeTodo, toggle
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;