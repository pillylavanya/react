import React, {useState} from 'react'

export default function Home() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  function Submit(e) {
    console.log(username, password)
    setUserName('')
    setPassword('')
  }
    return (
      <div>
        <h1>This is Home page</h1>
        <p>
          <input value={username} placeholder='Enter Name' onChange={(e) => { setUserName(e.target.value) }} />
          <p>
            <input value={password} placeholder='Enter Password' onChange={(e) => { setPassword(e.target.value) }} />
          </p>
          <button onClick={Submit}>Submit</button>
        </p>
      </div>
    )
}