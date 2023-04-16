import { Plugin, Template, TemplateConnector } from '@devexpress/dx-react-core';

const TodoHeader = () => {
  return (
    <Plugin name="header">
      <Template name="header">
        <header className="header">
          <h1>todos</h1>
          <TemplateConnector>
            {(_states, { addTodo }) => {
              const submitWhenEnter = (
                e: React.KeyboardEvent<HTMLInputElement>
              ) => {
                if (e.keyCode === 13) {
                  // 回车时
                  addTodo(e.target.value);
                  e.target.value = '';
                }
              };
              return (
                <input
                  className="new-todo"
                  placeholder="What needs to be done?"
                  autoFocus
                  onKeyDown={submitWhenEnter}
                />
              );
            }}
          </TemplateConnector>
        </header>
      </Template>
    </Plugin>
  );
};

export default TodoHeader;
