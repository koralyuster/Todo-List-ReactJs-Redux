import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { taskActions } from '../store/TaskSlics'
import '../styles/PopupTask.scss'

export default function PopupTask(props) {

  const dispatch = useDispatch()
  const tasksArr = useSelector(state => state.tasks)
  const [titleInput, setTitleInput,] = useState();
  const [descInput, setdescInput,] = useState();

  const handleChangeTitle = (e) => {
    setTitleInput(e.target.value)
  }

  const handleChangeDesc = (e) => {
    setdescInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(taskActions.addNewTask({ title: titleInput, description: descInput }))
  }
  console.log(tasksArr);

  return ((props.showPopup) ? (
    <div className="popup_task">
      <div className="wrapper_popup">
        <button className="close" onClick={() => props.setShowPopup(false)}>X</button>
        <h3>Add a Task</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Task title" name="title" onChange={handleChangeTitle} />
          <input type="text" placeholder="Description" name="description" onChange={handleChangeDesc} />
          {/*<input type="date" name="date" onChange={handleChange} />
          <input type="time" name="time" onChange={handleChange} />*/}
          <button type="submit">Add</button>
        </form>
      </div>
    </div >
  ) : ""
  )
}
