<template>
<div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand, " style="text-decoration: none;" href="#"><router-link class="inicioN" to="/">Gamers Hub</router-link></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><router-link class="menuN" to="/noticias">Noticias</router-link></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" style="font-weight: bold;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Videojuegos
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#"><router-link class="menuN" to="/playstation">Play Station 5</router-link></a></li>
              <li><a class="dropdown-item" href="#"><router-link class="menuN" to="/nintendo">Nintendo</router-link></a></li>
              <li><a class="dropdown-item" href="#"><router-link class="menuN" to="/xbox">Xbox</router-link></a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link class="menuN" to='contacto'>Contacto</router-link></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
<router-view/>
</template>

<style>
.inicioN{
  color: #1dd1d7;
  text-decoration: none;
}
.inicioN:hover{
  color: #8de6e9;
  text-decoration: none;
}
.menuN{
  color: #adacac;
  text-decoration-line: none;
}
.menuN:hover{
  color: #181819;
  text-decoration-line: none;
}

</style>

<script>
    import {defineComponent} from 'vue'

    export default defineComponent({
      name: "NavBar"
    })
</script>