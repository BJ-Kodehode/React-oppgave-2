import React, { useState } from 'react'

const mockData = [
  { username: 'Ola Normann', email: 'ola.normann@norge.no' },
  { username: 'Torleif', email: 'torleif@kodehode.no' },
  { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
  { username: 'Sander', email: 'sander@kodehode.no' },
]

const Users = () => {
  const [users, setUsers] = useState(mockData)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const handleAddUser = () => {
    if (username && email) {
      const newUser = { username, email }
      setUsers(prev => [...prev, newUser])
      setUsername('')
      setEmail('')
    }
  }

  return (
    <div>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Brukernavn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-post"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddUser}>Legg til bruker</button>
    </div>
  )
}

export default Users
