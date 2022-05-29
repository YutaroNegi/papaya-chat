import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from './components/Header';
import Username from './components/Username';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route exact path="/" element={<Username/>} />
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
