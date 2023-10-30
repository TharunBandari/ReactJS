import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [agree, setAgree] = useState(false);

  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  }

  const updateLastName = (event) => {
    setLastName(event.target.value);
  }

  return (
    <div>
      <form>
        Enter your first name:
        <input
          type="text"
          value={firstName}
          onChange={updateFirstName}
        /><br />
        Enter your last name:
        <input
          type="text"
          value={lastName}
          onChange={updateLastName}
        /><br />
        <b>Your name </b>{firstName} &nbsp;&nbsp;{lastName}<br/><br/>
        <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />

        <input type="button" value="Save" disabled={firstName.length <= 5 || lastName.length <= 5 || !agree} />
      </form>
    </div>
  );
}

export default App;
