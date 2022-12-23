import './App.css';
import GetIntTouch from './Components/GetInTouch';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="help" element={<GetIntTouch/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
