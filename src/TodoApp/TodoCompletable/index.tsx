import { useState, useCallback } from 'react';
import { uniq } from 'lodash';
import {
  Plugin,
  Template,
  Getter,
  TemplatePlaceholder,
  TemplateConnector,
  Action,
} from '@devexpress/dx-react-core';
import TodoFooter from './TodoFooter';
import { Todo } from '../TodoStore';

const TodoCompletable = () => {
  const [completedTodoIds, setCompletedTodoIds] = useState<string[]>([]);

  const getTodoWithCompletedStatus = useCallback(
    ({ todos = [] } : { todos? : Todo []}) => {
      return todos.map((each) => {
        return {
          ...each,
          completed: completedTodoIds.indexOf(each.id) >= 0,
        };
      });
    },
    [completedTodoIds]
  );

  const completeTodoAction = useCallback((id: string) => {
    setCompletedTodoIds((ids) => uniq(ids.concat(id)));
  }, []);
  const activeTodoAction = useCallback((id: string) => {
    setCompletedTodoIds((ids) => ids.filter((each) => each !== id));
  }, []);

  return (
    <Plugin name="completable">
      {/* 在 Footer 中展示 complete 对应的操作 */}
      <Template name="main">
        <TemplatePlaceholder />
        <TemplatePlaceholder name="footer" />
      </Template>

      <Getter name="todos" computed={getTodoWithCompletedStatus} />
      <Action name="completeTodo" action={completeTodoAction} />
      <Action name="activeTodo" action={activeTodoAction} />

      {/* 扩展 todoList 中 li，增加对应的 className */}
      <Template name="todoList">
        {({ todos = [] } : { todos? : Todo []}) =>
          todos.map((todo) => (
            <li className={todo.completed ? 'completed' : ''}>
              <TemplatePlaceholder name="todoItem" params={{ todo }} />
            </li>
          ))
        }
      </Template>
      {/* 扩展 todoItem 样式，增加 checkbox */}
      <Template name="todoItem">
        {({ todo } : { todo? : Todo }) => (
          <TemplateConnector>
            {(getters, { completeTodo, activeTodo }) => (
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo!.completed}
                  onChange={(e) => {
                    if (e.target.checked) {
                      completeTodo(todo!.id);
                    } else {
                      activeTodo(todo!.id);
                    }
                  }}
                />

                <TemplatePlaceholder />
              </div>
            )}
          </TemplateConnector>
        )}
      </Template>

      <TodoFooter />
    </Plugin>
  );
};

export default TodoCompletable;
