import React, { useEffect, useState } from "react";

let globalId = 0;
export default function App() {


  const [task, settasks] = useState();
  const [todos, settodos] = useState([]);

  function createTodo(event) {

    event.preventDefault();

    settodos(oldtodos => {
      settasks("")
      return [...oldtodos, { todo: task, id: globalId++ }]
    })


  }

  function deleteItem(itemID) {
    settodos(oldtodos => oldtodos.filter(item => item.id !== itemID))


  }


  return <div>

    <form onSubmit={createTodo}>

      <h1>MY todo app</h1>
      <input type="text" value={task} onChange={event => {
        settasks(event.target.value)
      }} />
      <button type="submit">Add task</button>
    </form>

    <ul>
      {todos.map((item, index) => {
        return <div key={item.id}>
          <li>{item.todo}</li>
          <button onClick={() => deleteItem(item.id)}>DONE</button>
        </div>
      })}
    </ul>
  </div>
}