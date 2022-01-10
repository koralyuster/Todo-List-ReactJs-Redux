import React, { useState } from 'react'
import '../styles/Subject.scss';
import ListSubject from './ListSubject';
import PopupSubject from './PopupSubject';

export default function Subject() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className="subject">
      <h1>subject</h1>
      <div className="wrapper">
        <p>In order for you to manage your task time well, we believe in setting the task subject earlier.</p>
        <button onClick={() => setShowPopup(true)}>Add a Subject</button>
      </div>
      <PopupSubject showPopup={showPopup} setShowPopup={setShowPopup} />
      <ListSubject />
    </div>
  )
}
