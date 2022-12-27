
import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [course, setCourse] = useState();
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    users.splice(1,0,name);

    console.log(users);
  }

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}></form>
      <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}/> <br /> <br />
      <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/> <br /><br />
      <select value={course} onChange={(e) => setCourse(e.target.value)}>
        <option value="select">Select</option>
        <option value="React">React</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
      </select><br /> <br />
      <button type='submit'>Submit</button>

      <h2>Available User</h2>
      <ol>
        {
          users.map((user, index) => <li key={index}>{users}</li> ) 
        }
      </ol>
    </div>
  )
}

export default App