import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

import Gow from "./paginas/GOW"
import Pes from "./paginas/PES"
import Fal from "./paginas/FAL"
import Cod from "./paginas/COD"
import Des from "./paginas/DES"
import Nav from "./Nav"
import Home from "./paginas/Home"
import Error404 from "./paginas/Error404";


function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/gow" element={<Gow/>}></Route>        
        <Route path="/pes" element={<Pes/>}></Route>
        <Route path="/fal" element={<Fal/>}></Route>
        <Route path="/cod" element={<Cod/>}></Route>
        <Route path="/des" element={<Des/>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
