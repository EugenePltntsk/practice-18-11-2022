import React, { useState } from 'react'

export default function ListElement({ submitChangesInTask, deleteTask, id, name, description}) {

    const [isPressedEdit, setIsPressedEdit] = useState(false);

    const [nameValue, setNameValue] = useState(name);
    const [descriptionValue, setDescriptionValue] = useState(description);
    
    

    const editButtonToggler = () => {
        setIsPressedEdit(!isPressedEdit);
      };

      const funcForEdit = (e) => {

        e.preventDefault();
        const newTask = {
            name: nameValue,
            description: descriptionValue,
            id,
        }

        submitChangesInTask(newTask);
        editButtonToggler();

      }

  return (
    
    <li>
          {isPressedEdit ? (
            <form onSubmit={funcForEdit}>
              <input onChange={(event)=> setNameValue(event.target.value)} value={nameValue} type="text" />
              <textarea
              onChange={(event)=> setDescriptionValue(event.target.value)}
                value={descriptionValue}
                name="texarea"
                id={id}
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit">Save Changes</button>
            </form>
          ) : (
            <>
              <h3>{name}</h3>
              <p>{description}</p>
              <button type="button" id={id} onClick={deleteTask}>
                Delete
              </button>
            </>
          )}
          <button type="button" id={id} onClick={editButtonToggler}>
            Edit
          </button>
        </li>
  )
}
