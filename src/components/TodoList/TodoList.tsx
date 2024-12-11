import React from 'react';
import cn from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
  selectedTodo: Todo | null;
  setSelectedTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
};

export const TodoList: React.FC<Props> = ({
  todos,
  selectedTodo,
  setSelectedTodo,
}) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map(todo => {
        const { id, completed, title } = todo;
        const isSelected = selectedTodo && selectedTodo.id === id;

        return (
          <tr
            data-cy="todo"
            className={cn({ 'has-background-info-light': isSelected })}
            key={id}
          >
            <td className="is-vcentered">{id}</td>

            <td className="is-vcentered">
              {completed ? (
                <span className="icon" data-cy="iconCompleted">
                  <i className="fas fa-check" />
                </span>
              ) : (
                ''
              )}
            </td>

            <td className="is-vcentered is-expanded">
              <p
                className={cn({
                  'has-text-success': completed,
                  'has-text-danger': !completed,
                })}
              >
                {title}
              </p>
            </td>

            <td className="has-text-right is-vcentered">
              <button
                data-cy="selectButton"
                className="button"
                type="button"
                onClick={() => setSelectedTodo(todo)}
              >
                <span className="icon">
                  <i
                    className={cn('far', {
                      'fa-eye-slash': isSelected,
                      'fa-eye': !isSelected,
                    })}
                  />
                </span>
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);