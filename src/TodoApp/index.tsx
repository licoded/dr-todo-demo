import { PluginHost } from '@devexpress/dx-react-core';
import 'todomvc-app-css/index.css';
import TodoCore from './TodoCore';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoCompletable from './TodoCompletable';

const TodoApp = () => {
  return (
    <PluginHost>
      <TodoCore />

      {/* ========= plugins ========= */}
      <TodoHeader />
      <TodoList />
      {/* completable plugin */}
      <TodoCompletable />
    </PluginHost>
  );
};

export default TodoApp;
