import React, { useState } from 'react'

const CookieClicker = () => {
  const [score, setScore] = useState(0)

  const handleClick = () => {
    setScore(prev => prev + 1)
  }

  const handleEatAll = () => {
    setScore(0)
  }

  return (
    <div>
      <button onClick={handleClick}>
        <img src="./cookie.png" alt="Image of a Cookie" />
      </button>
      <p>Du har {score} poeng!</p>
      {score > 0 && (
        <button onClick={handleEatAll}>
          Spis alle kjeks 🍽️
        </button>
      )}
    </div>
  )
}

export default CookieClicker
