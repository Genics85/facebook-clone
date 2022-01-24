import './App.css';
import Feed from './Feed';
import Header from "./header.jsx";
import SideBar from './sideBar.jsx';
import Widget from './Widget';

function App() {
  return (
    <div className='app'>
        <Header/>
        <div className='app__body'>
          <SideBar/>
          <Feed/>
          <Widget/>
        </div>
        
        
    </div>
  
  );
}

export default App;
