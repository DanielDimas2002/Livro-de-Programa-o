import Consultorio from "./sistemas/Consultorio";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <nav>
        <h1>Refazendo Projetos React</h1>
        <ul>
          <li><Link to="/consultorio">Consultório</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/consultorio" element={<Consultorio/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
