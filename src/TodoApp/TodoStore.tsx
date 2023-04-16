import { useState, useCallback } from 'react';
import { Plugin, Getter, Action } from '@devexpress/dx-react-core';
import shortid from 'shortid';

export interface Todo {
  id: string;
  title: string;
  completed?: boolean;
}

const TodoStore = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = useCallback((newTodoTitle: string) => {
    setTodos((originTodos) =>
      originTodos.concat({
        id: shortid.generate(),
        title: newTodoTitle,
      })
    );
  }, []);
  const removeTodo = useCallback((removedTodoId: string) => {
    setTodos((originTodos) =>
      originTodos.filter((todo) => todo.id !== removedTodoId)
    );
  }, []);

  return (
    <Plugin>
      <Getter name="todos" value={todos} />
      <Action name="addTodo" action={addTodo} />
      <Action name="removeTodo" action={removeTodo} />
    </Plugin>
  );
};

export default TodoStore;
