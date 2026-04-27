const header = document.getElementById("header");
const footer = document.getElementById("footer");

const base = window.location.hostname.includes("github.io")
  ? "/football_americano"
  : "";

header.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark navbar-cfa fixed-top">
  <div class="container">
    <a class="navbar-brand" href="${base}/index.html">
      <span>CFA</span> Football Americano
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCFA">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarCFA">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="${base}/pages/institucional.html">Institucional</a></li>
        <li class="nav-item"><a class="nav-link" href="${base}/pages/equipos.html">Equipos</a></li>
        <li class="nav-item"><a class="nav-link" href="${base}/pages/calendario.html">Calendario</a></li>
        <li class="nav-item"><a class="nav-link" href="${base}/pages/estadisticas.html">Estadísticas</a></li>
        <li class="nav-item"><a class="nav-link" href="${base}/pages/noticias.html">Noticias</a></li>
        <li class="nav-item"><a class="nav-link" href="${base}/pages/contacto.html">Contacto</a></li>
      </ul>
    </div>
  </div>
</nav>
`;

footer.innerHTML = `
<footer class="footer-cfa">
  <div class="container">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
      <p>© 2026 Córdoba Football Americano. Todos los derechos reservados.</p>

      <div class="footer-links">
        <a href="${base}/pages/institucional.html">Institucional</a>
        <a href="${base}/pages/contacto.html">Contacto</a>
        <a href="https://www.instagram.com/cbafootballamericano" target="_blank">Instagram</a>
      </div>
    </div>
  </div>
</footer>
`;