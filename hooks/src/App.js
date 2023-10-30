//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [visitorcount, setVisitorCount] = useState(0);
  useEffect(()=>{
    setVisitorCount(visitorcount+1);  
  },[])         //empty dependency to overcome infinte chain loop

  useEffect(() => {
    console.log('Visitor count increased. You are visitor #' + visitorcount);
    setVisitorCount(visitorcount+1);
  }
  )
  //This arrow all execute in all the 3 phases, viz, Mounting, Updating and 
  //Unmounting Phases, useEffect hook introduce all 
  //the 3 phases for this 1functional componentts 
  //ReactJs implementing an observer with observer the changes for 
  //visitorsCount and if visitorCount chages it automatically calling that function

  const  updateVisitorCount = ()=>{
    setVisitorCount(visitorcount+1);
    console.log("Visitor count incremented. You are visitor #"+visitorcount)
  }

  return (<center>
    <div className="App">
      <form>
        <input type="button" onClick={updateVisitorCount} value="update Visitor"/><br/>
        <b>You are Visitor #</b>{visitorcount}
      </form>
    </div></center>
  );
}
 
export default App;