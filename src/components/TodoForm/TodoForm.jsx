import React, { useState } from "react";
import { nanoid } from 'nanoid'

export default function TodoForm({setTasks}) {
  const [nameOfTask, setNameOfTask] = useState("");
  const [descriptionOfTask, setDescriptionOfTask] = useState("");

  const obj = {
    taskTitle: setNameOfTask,
    description: setDescriptionOfTask,
  };

  const getDataFromForm = (e) => {
    obj[e.target.name](e.target.value.toLowerCase());
  };

  const submitFoo = (e) => {
    e.preventDefault();
    const newTask = {
      name: nameOfTask,
      description: descriptionOfTask,
      isCompleted: false,
      id: nanoid(),
    };
    setTasks((prevState => [...prevState, newTask]));
  };

  return (
    <form onSubmit={submitFoo}>
      <label htmlFor="">
        add task
        <input
          value={nameOfTask}
          name="taskTitle"
          onChange={getDataFromForm}
          type="text"
          placeholder="type your task here"
        />
      </label>
      <label>
        add description
        <textarea
          value={descriptionOfTask}
          onChange={getDataFromForm}
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder="describe your task in details"
        ></textarea>
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
