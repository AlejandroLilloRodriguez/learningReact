import './App.css'

function App() {
  return (

    <div className="d-flex flex-column min-vh-100" >
          <ul class="nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Índice</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cátalogo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Sobre nosotros</a>
        </li>
      </ul>
    <div className="text-center mt-5">
      <h1>Bienvenido a mi catálogo</h1>
      <p>Aquí podrás explorar nuestros productos.</p>
    </div>
    </div>
    
  )
}

export default App