import React, { createContext, useEffect, useState } from 'react';
import { Todo } from '../models/Todo';
import { get, save } from '../services/TodoService';
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
    const [todos, setTodos] = useState<Todo[]>(get);

    useEffect(() => {
        save(todos);
    }, [todos])
    
    const addTodo = (title: string) => {
        const todo: Todo = { id: todos.length + 1, title: title, done: false}
        setTodos([...todos, todo])
    }

    const removeTodo = (todo: Todo) => {
        const index = todos.indexOf(todo);
        //retorna uma lista de itens poém sem o item cujo atributo passado (index) seja igual ao index da lista.
        setTodos(todos.filter((_, i) => i !== index))
    }
    
    const toggle = (todo: Todo) => {
        const index = todos.indexOf(todo);
        todos[index].done = !todo.done;
        setTodos([...todos]);
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