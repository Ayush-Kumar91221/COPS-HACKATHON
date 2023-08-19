import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./components/navbar/navbar.js"
import Home from "./components/Homepage/Homepage"
import AddItems from './components/AddItems/AddItems';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<AddItems/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
