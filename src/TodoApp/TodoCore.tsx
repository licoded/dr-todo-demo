import {
  Plugin,
  Template,
  TemplatePlaceholder,
} from '@devexpress/dx-react-core';
import TodoStore, { Todo } from './TodoStore';

const TodoCore = () => {
  return (
    <Plugin>
      <TodoStore />
      <Template name="root">
        <section className="todoapp">
          <TemplatePlaceholder name="header" />
          <TemplatePlaceholder name="main" />
        </section>
      </Template>
    </Plugin>
  );
};

export default TodoCore;
