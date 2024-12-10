<template>
  <div class="inicioI" style="padding-top: 30px;">
    <div >
      <img src="@/assets/img/Inicio/logo2.png" alt="">
    </div>
        <div>
          <div>
            <h1 class="titulo">¡Bienvenido a Gamers Hub!</h1>
          </div>
        <div style="margin-top: 15px;">
          <h4 class="lista">Descubre las últimas <a href="http://localhost:8080/noticias">Noticias</a> sobre gaming</h4>
        </div>
        <div>
          <h4 class="lista">Puedes acceder a nuestro catálogo de juegos de <a href="http://localhost:8080/playstation">PS5</a>, <a href="http://localhost:8080/xbox">Xbox</a> y <a href="http://localhost:8080/nintendo">Nintendo</a></h4>
        </div>
        <div>
          <h4 class="lista">También si necesitas información sobre un juego en específico puedes enviar tus datos y te <a href="http://localhost:8080/contacto">contactaremos</a> para ofrecerte nuestra ayuda</h4>
      </div>
    </div>
  </div>
</template>

<style>
.inicioI{
  display: flex;
  background-image: url('@/assets/img/Inicio/fondoInicio.jpg');
  background-size: cover;
  padding-bottom: 190px;
}
.titulo
{
  color: #1dd1d7;
  margin-top: 25px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
.lista
{
  color: rgb(147, 196, 242);
  margin-top: 53px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
.lista a{
  color: aliceblue;
  text-decoration: none;
}
.lista a:hover
{
  color: rgb(183, 190, 196);
}
</style>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent ({
      
        

  })

</script>
