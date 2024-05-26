
import './App.css';
import Headers from "./mycomponents/Headers";
import { Todos } from "./mycomponents/Todos";
import { Footer } from "./mycomponents/Footer";
import { AddTodo } from "./mycomponents/AddTodo";
import { About } from "./mycomponents/About";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((e) => e !== todo);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos, myTodo];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
    console.log(myTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Headers title="To-do List" searchbar={true} />
      <Routes>
        <Route exact path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
        } />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
