import React, { useEffect, useState } from "react";
import { localKey } from "../../helpers/localStorageFunctions";
import ListElement from "../ListElement/ListElement";

export default function ListOfTasks({ submitChangesInTask, tasks, setTasks }) {
 

  const deleteTask = (e) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== e.target.id;
      })
    );
  };

 

  useEffect(() => {
    localStorage.setItem(localKey, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <ul>
      {tasks.map((item) => (
        <ListElement key={item.id} submitChangesInTask={submitChangesInTask} deleteTask={deleteTask} id={item.id} name={item.name} description={item.description}/>
      ))}
    </ul>
  );
}
