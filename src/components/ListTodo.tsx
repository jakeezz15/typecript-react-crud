import React, { useState } from "react";
import Todo from "./Todo";

interface IProps {
  todo: {
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

const ListTodo: React.FC<IProps> = ({ todo, setTodos }) => {
  let totalUnfinish = [...todo].length;

  const [counter, setCounter] = useState(0);

  let deleted: (a: number) => void;
  deleted = (del: number) => {
    if (counter > 0) {
      return setCounter(counter - del);
    } else {
      return;
    }
  };

  let done: (a: number) => void;
  done = (num) => {
    return setCounter(counter + num);
  };
  let undone: (a: number) => void;
  undone = (num) => {
    if (counter > 0) {
      return setCounter(counter - num);
    } else {
      return;
    }
  };

  return (
    <div className="list-todo">
      <div className="task-remaining">
        {totalUnfinish - counter} Unfinished Task
      </div>
      <ul className="list-org">
        {todo.map((data) => (
          <Todo
            text={data.text}
            todos={todo}
            setTodos={setTodos}
            currData={data}
            deleted={deleted}
            done={done}
            undone={undone}
          />
        ))}

        {/* {todos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            done={done}
            undone={undone}
            deleted={deleted}
          />
        ))} */}
      </ul>
    </div>
  );
};

export default ListTodo;
