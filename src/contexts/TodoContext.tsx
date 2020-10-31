import React, { createContext } from 'react';
import { TodoContextType } from './TodoContextType';

// context é o escopo de variáveis e funções que eu tenho acesso ao longo de todo o programa!
export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { },
});