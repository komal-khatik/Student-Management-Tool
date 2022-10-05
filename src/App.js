
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import AddStudent from './Components/Students/AddStudent';
import EditStudent from './Components/Students/EditStudent';
import ViewStudent from './Components/Students/ViewStudent';
import Notfound from './Components/Pages/Notfound';

function App() {
  return (
    <Router>                                  {/*This is a parent component in routing*/}
      <div className="App">
        <Navbar />
        <Routes>                               {/*Before we were using switch instead of routes*/}
          <Route path="/" element={<Home/>}/>       {/*It will decide for which path which component should execute*/}
          <Route path="/About" element={<About/>}/>
          <Route path="/Students/AddStudent/add" element={<AddStudent/>}/>
          <Route path="/Students/edit/:id" element={<EditStudent/>}/>
          <Route path="/Students/:id" element={<ViewStudent/>}/>
          <Route path="*" exact={true} component={Notfound} />
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;
