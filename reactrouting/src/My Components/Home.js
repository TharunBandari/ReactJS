import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <center>
        <div>
          <b>Welcome to ReactJS</b>
          <br />
          <nav>
            <Link to="/home">Home</Link>&nbsp;&nbsp;
            <Link to="/contactus">ContactUs</Link>&nbsp;&nbsp;
            <Link to="/registration">Registration</Link>
          </nav>
        </div>
      </center>
    </div>
  );
}

export default Home;
