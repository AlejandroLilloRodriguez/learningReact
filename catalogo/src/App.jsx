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

function NavBar() {
  return(
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
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
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

// Componente Catalogo
function Catalogo() {
  return (
    <div className="d-flex flex-wrap justify-content-center mt-5">
      {productos.map((producto) => (
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
  
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 w-100">
        <NavBar/>
        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/sobre-nosotros" element={<div className="text-center mt-5">Sobre nosotros</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
