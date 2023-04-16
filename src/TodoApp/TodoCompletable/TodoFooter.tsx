import * as React from 'react';
import {
  Plugin,
  Template,
  TemplateConnector,
  TemplatePlaceholder,
} from '@devexpress/dx-react-core';
import { Todo } from '../TodoStore';

enum Tag {
  All = '',
  Active = 'Active',
  Complete = 'Complete',
}

const TodoFooter = () => {
  const [tag, setTag] = React.useState(Tag.All);
  const filterTodo = React.useCallback(
    (todos: Todo[]) => {
      return todos.filter((todo) => {
        if (tag === Tag.Active) {
          return !todo.completed;
        }
        if (tag === Tag.Complete) {
          return !!todo.completed;
        }
        return true;
      });
    },
    [tag]
  );
  return (
    <Plugin name="footer">
      <Template name="todoList">
        <TemplateConnector>
          {({ todos }) => (
            <TemplatePlaceholder params={{ todos: filterTodo(todos) }} />
          )}
        </TemplateConnector>
      </Template>
      <Template name="footer">
        <TemplateConnector>
          {({ todos }) => (
            <footer className="footer">
              <span className="todo-count">
                <strong>{filterTodo(todos).length}</strong> item left
              </span>
              <ul className="filters">
                {[Tag.All, Tag.Active, Tag.Complete].map((t) => (
                  <li>
                    <a
                      className={tag === t && 'selected'}
                      href={`#/${t.toLowerCase()}`}
                      onClick={() => setTag(t)}
                    >
                      {t || 'All'}
                    </a>
                  </li>
                ))}
              </ul>
            </footer>
          )}
        </TemplateConnector>
      </Template>
    </Plugin>
  );
};

export default TodoFooter;
