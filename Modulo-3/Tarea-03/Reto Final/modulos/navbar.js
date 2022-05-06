export const Navbar = (container) => {

    container.innerHTML=`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="./index.html"><img width="50px" src="./iconos/guitar-icon.jpg"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./pages/productos.html">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="./pages/observacion.html">Opinion</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      `

}