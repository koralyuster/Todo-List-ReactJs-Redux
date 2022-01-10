import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../styles/ListTask.scss'

export default function ListTask() {
  const [showDetails, setShowDetails] = useState(false)
  const tasksArr = useSelector(state => state.tasks)
  console.log(tasksArr);


  const toggleShowDetails = () => setShowDetails(!showDetails);

  return (
    <div className="list_task">

      {tasksArr.map((item, index) => (
        <ul>
          <li key={item.id} onClick={toggleShowDetails}>{item.title}<i className="fas fa-chevron-down"></i>
            {showDetails ? (
              <div className="open">
                <p>{item.description}</p>
                <p>Date: 10/01/2022</p>
                <p>Time: 18:00</p>
              </div>) : ""}
          </li>
        </ul>
      ))}
      {/* <li onClick={toggleShowDetails}>{tasksArr[0].title}<i className="fas fa-chevron-down"></i>
              {showDetails ? (
                <div className="open">
                  <p>run 1 km than last week</p>
                  <p>Date: 10/01/2022</p>
                  <p>Time: 18:00</p>
                </div>) : ""}
              </li>*/}
    </div>
  )
}
