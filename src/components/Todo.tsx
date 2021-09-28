import React from "react";
import { MdDelete } from "react-icons/md";

interface IProps {
  text: string;
  deleted: (a: number) => void;
  done: (a: number) => void;
  undone: (a: number) => void;
  currData: {
    id: number;
    text: string;
    status: boolean;
  };
  todos: {
    id: number;
    text: string;
    status: boolean;
  }[];

  setTodos: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        text: string;
        status: boolean;
      }[]
    >
  >;
}

const Todo: React.FC<IProps> = ({
  text,
  todos,
  setTodos,
  currData,
  deleted,
  done,
  undone,
}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== currData.id));
    todos.map((item) => {
      if (item.id === currData.id) {
        deleted(1);
      }
    });
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === currData.id) {
          return {
            ...item,
            status: !item.status,
          };
        }
        return item;
      })
    );
    todos.map((item) => {
      if (item.id === currData.id && !item.status) {
        done(1);
      }
      if (item.id === currData.id && item.status) {
        undone(1);
      }
    });
  };

  return (
    <div className="todo-div">
      <li className="todo">
        <input
          type="checkbox"
          className="checkbox-round"
          onClick={completeHandler}
        ></input>

        <label className="strikethrough">{text}</label>

        <button
          className="delete"
          onKeyPress={(e) => {
            e.preventDefault();
          }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
          onClick={deleteHandler}
        >
          <MdDelete className="delete-icon" />
        </button>
      </li>
    </div>
  );
};

export default Todo;
