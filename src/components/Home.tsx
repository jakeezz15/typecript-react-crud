import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import ListTodo from "./ListTodo";

interface IState {
  todo: {
    id: number;
    text: string;
    status: boolean;
  }[];
}

function Home() {
  const [todos, setTodos] = useState<IState["todo"]>([]);
  const [input, setInput] = useState("");

  const submitHandler = (
    e: React.FormEvent<SVGElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const addToDo = {
      id: Math.floor(Math.random() * 10000),
      text: input,
      status: false,
    };
    if (!addToDo.text || /^\s*$/.test(addToDo.text)) {
      return;
    } else {
      setTodos((previousState) => [...previousState, addToDo]);
      console.log(...todos);
      setInput("");
    }
  };

  return (
    <div className="home">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="title-home-pos">
          <h2 className="title-text">Todo List</h2>
        </div>
        <div className="btn-pos">
          <IoMdAddCircle className="btn-add" onClick={submitHandler} />
        </div>

        <div className="list-comp">
          <ListTodo todo={todos} setTodos={setTodos} />
        </div>

        <input
          className="input-style"
          type="text"
          placeholder="Add Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </form>
    </div>
  );
}

export default Home;
