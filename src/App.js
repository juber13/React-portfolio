import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import More from './components/More';
import Project from './components/Project';
import Contacts from './components/Contacts';
function App() {
  return (
    <div className="App">
       <Header/>
       <Home/> 
       <Services/>
       <More/>
       <Project/>
       <Contacts/> 
    </div>
  );
}

export default App;
