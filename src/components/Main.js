import React, { useState } from 'react'
import '../styles/Main.scss';
import ListSubject from './ListSubject';
import ListTask from './ListTask';
import PopupTask from './PopupTask';

export default function Main() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className="main">
      <div className="side-bar">
        <div className="logo">Manage.It</div>
        <div className="wrapper">
          <div className="add" onClick={() => setShowPopup(true)}>Add a Task
            <div className="plus"><i className="far fa-plus-square"></i></div>
          </div>
          <PopupTask showPopup={showPopup} setShowPopup={setShowPopup} />
          <ListTask />
        </div>
      </div>
      <div className="calender"></div>
    </div>
  )
}
