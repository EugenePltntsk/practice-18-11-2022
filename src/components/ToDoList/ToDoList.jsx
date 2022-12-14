import React, { useEffect, useState } from "react";
import { getDataFromLS, localKey } from "../../helpers/localStorageFunctions";
import ListOfTasks from "../ListOfTasks/ListOfTasks";
import TodoForm from "../TodoForm/TodoForm";

export default function ToDoList() {
  const [tasks, setTasks] = useState(getDataFromLS);

  const submitChangesInTask = (newTask) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === newTask.id) {
          return newTask;
        }
        return item;
      })
    );
  };

  return (
    <div>
      ToDoList
      <TodoForm setTasks={setTasks} />
      <ListOfTasks submitChangesInTask={submitChangesInTask} tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
//1) Реалізуавти ліниву ініціалізацію стейту(забрати дані з локал сторедж)
//2) Реалізувати видалення елементів
//3) Розбити на окремі компоненти (форма, список, елемент списка задач)
