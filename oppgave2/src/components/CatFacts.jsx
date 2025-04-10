import React, { useEffect, useState } from 'react'

const CatFacts = () => {
  const [facts, setFacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const response = await fetch('https://catfact.ninja/facts?limit=5')
        if (!response.ok) throw new Error('Noe gikk galt under henting av kattfakta.')
        const data = await response.json()
        setFacts(data.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchFacts()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <ul>
      {facts.map((fact, index) => (
        <li key={index}>{fact.fact}</li>
      ))}
    </ul>
  )
}

export default CatFacts
