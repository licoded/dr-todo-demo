import { PluginHost } from '@devexpress/dx-react-core';
import 'todomvc-app-css/index.css';
import TodoCore from './TodoCore';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

const TodoApp = () => {
  return (
    <PluginHost>
      <TodoCore />

      {/* ========= plugins ========= */}
      <TodoHeader />
      <TodoList />
    </PluginHost>
  );
};

export default TodoApp;
