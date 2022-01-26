import './App.css';
import React from "react"
import Feed from './Feed';
import Header from "./header.jsx";
import Login from './Login';
import SideBar from './sideBar.jsx';
import Widget from './Widget';
import { useStateValue } from './StateProvider';


function App() {
  const [{user}, dispatch]= useStateValue();

  return (
    <div className='app'>
      {!user? <Login/> :
      <>
      <Header/>
      <div className='app__body'>
        <SideBar/>
        <Feed/>
        <Widget/>
        </div>
      </>
      
      }
        
        
    </div>
  
  );
}

export default App;
