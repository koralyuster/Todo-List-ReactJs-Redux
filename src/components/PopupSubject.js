import React from 'react'
import '../styles/Popup.scss';

export default function Popup(props) {
  return ((props.showPopup) ? (
    <div className="popup">
      <div className="wrapper_popup">
        <button className="close" onClick={() => props.setShowPopup(false)}>X</button>
        <h3>Add a subject</h3>
        <input type="text" placeholder="Write your subject" />
        <button>Add</button>
      </div>
    </div>
  ) : ""
  )
}
