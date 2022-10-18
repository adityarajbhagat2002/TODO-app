import React, { useEffect, useState } from "react";

let globalId = 0;

export default function App() {


  const [task, settasks] = useState("");
  const [todos, settodos] = useState([]);
  const [placeholderText, setPlaceholderText] = useState("Put it in here");

  function createTodo(event) {
    event.preventDefault();
    if (task !== "") {
      settodos(oldTodos => {
        settasks("")
        return [...oldTodos, { todo: task, id: globalId++ }]
      })
    }
    else {
      setPlaceholderText("Write something :)");
      setTimeout(() => {
        setPlaceholderText("Put it in here");
      }, 5000);
    }
  }

  function deleteItem(itemID) {
    settodos(oldTodos => oldTodos.filter(item => item.id !== itemID));
  }


  return (
    <>
      <div className="main">
        <h1>Stick your TODOs</h1>
        <form onSubmit={createTodo} className="todo-form">
          <ul>
            <div className="Box">
              <textarea type="text" value={task} placeholder={placeholderText} className='inputBar' onChange={event => {
                settasks(event.target.value)
              }} />
              <button type="submit" className="btn addBtn"><i class="fa-solid fa-plus"></i></button>
            </div>

            {todos.length !== 0 ? todos.map((item, index) => {
              return (
                <>
                  <div className="Box" key={item.id}>
                    <li>
                      <textarea className='inputBar'>{item.todo}</textarea>
                    </li>
                    <button className="btn deleteBtn" onClick={() => deleteItem(item.id)}><i class="fa-solid fa-trash"></i></button>
                  </div>
                </>
              );
            }) : null}
          </ul>
        </form>
      </div>
    </>
  );
}