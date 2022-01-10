import React, { useState } from 'react'
import '../styles/Tasks.scss'
import PopupTask from './PopupTask'
import TaskCard from './TaskCard'

export default function Tasks() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className="tasks">
      <h1>Your Tasks</h1>
      <div className="wrapper">
        <label>Filter by subject</label>
        <select>
          <option value="">Study</option>
          <option value="">Sport</option>
          <option value="">Friends</option>
          <option value="">Other</option>
        </select>
        <label>Select Date</label>
        <input type="date" />
        <button onClick={() => setShowPopup(true)}>Add a Task</button>
      </div>
      <PopupTask showPopup={showPopup} setShowPopup={setShowPopup} />
      <TaskCard />
    </div>
  )
}
