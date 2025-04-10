import React from 'react'
import CookieClicker from './components/CookieClicker'
import CatFacts from './components/CatFacts'
import Users from './components/Users'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1>React Hooks Oppgaver</h1>
      <hr />
      <h2>Cookie Clicker 🍪</h2>
      <CookieClicker />
      <hr />
      <h2>Cat Facts 🐱</h2>
      <CatFacts />
      <hr />
      <h2>Users 👤</h2>
      <Users />
    </div>
  )
}

export default App
