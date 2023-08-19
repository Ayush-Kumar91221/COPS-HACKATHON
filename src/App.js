import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "./components/navbar/navbar.js"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={Login}/>
          <Route path='/login' element={Login}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
