import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import More from './components/More';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
function App() {
  return (
    <div className="App">
        <Header/>
        <Home/> 
         <Services/>
        <Projects/>
       {/* <More/> */}
       <Contacts/> 
    </div>
  );
}

export default App;
