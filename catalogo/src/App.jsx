import './App.css';
import Cards from './componentes/cards';
import productos from './data/productos';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React , { useState } from 'react';

// Componente Home
function Home() {
  return (
    <div className="text-center mt-5">
      <h1>Bienvenido a mi catálogo</h1>
      <p>Aquí podrás explorar nuestros productos.</p>
    </div>
  );
}

function NavBar({ setSearchTerm }) {
  return(
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <ul className="nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Índice</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/catalogo">Catálogo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sobre-nosotros">Sobre nosotros</Link>
          </li>
        </ul>
        <form className="d-flex" role="search"onSubmit={(e) => e.preventDefault()}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchTerm(e.target.value)}/*se captura loq ue pone el usuario, se obtiene el valor y se manda a la funcion setsearchterm*/ />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

// Componente Catalogo
function Catalogo({searchTerm}) {
  const filteredProductos = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="d-flex flex-wrap justify-content-center mt-5">
      {filteredProductos.map((producto) => (
        <Cards
          key={producto.id}
          imagen={producto.imagen}
          titulo={producto.nombre}
          descripcion={producto.descripcion}
        />
      ))}
    </div>
  );
}

// App principal con rutas
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 w-100">
        <NavBar setSearchTerm={setSearchTerm}/*al navbar le asignamos la función setSearchTerm que es la que obtiene el valor del input*/ /> 
        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo searchTerm={searchTerm}/>} /* al catalogo le pasamos el valor de la funcion setsearchterm *//>
          <Route path="/sobre-nosotros" element={<div className="text-center mt-5">Sobre nosotros</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
