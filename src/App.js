import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './homepage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={< Navigate to='/home' />}/>
          <Route path='/home' element={<HomePage/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
