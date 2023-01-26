import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
