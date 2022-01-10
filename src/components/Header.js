import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.scss';

export default function Header() {
  return (
    <div>
      <div className="nav">
        <div className="logo">Manage.It</div>
        <NavLink to="/subjects">Subjects</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/logout">Logout</NavLink>
      </div>
    </div>
  )
}
