import {
  Plugin,
  Template,
  TemplatePlaceholder,
  TemplateConnector,
} from '@devexpress/dx-react-core';
import { Todo } from './TodoStore';

const TodoList = () => {
  return (
    <Plugin name="todoList">
      <Template name="main">
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            <TemplateConnector>
              {({ todos }) => (
                <TemplatePlaceholder name="todoList" params={{ todos }} />
              )}
            </TemplateConnector>
          </ul>
        </section>
      </Template>

      <Template name="todoList">
        {({ todos = [] } : { todos? : Todo[]}) =>
          todos.map((todo) => (
            <li key={todo.id + todo.title}>
              <TemplatePlaceholder name="todoItem" params={{ todo }} />
            </li>
          ))
        }
      </Template>
      <Template name="todoItem">
        {({ todo } : { todo? : Todo }) => <label>{ todo!.title }</label>}
      </Template>
    </Plugin>
  );
};

export default TodoList;
