<template>
    <div class="bgX">
        <div class="container">
            <img class="imgF" src="@/assets/img/XBOX/bannerxbox.jpg" alt="PS5">
            <div class="listaJ">
                <div>
                    <h6 class="tituloX" style="font-size: 13px">Skull Island: Rise of King Kong</h6>
                    <img class="juego" src="@/assets/img/XBOX/KingKong.jpg" alt="">
                    <button
                        @click="modalContent('Skull Island: Rise of King Kong', 'Fecha de lanzamiento: 17 de octubre de 2023')"
                        style="margin-top: 10px;" type="button" class="btn btn-success" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Ver Detalle</button>
                </div>
                <div>
                    <h6 class="tituloX">Minecraft</h6>
                    <img class="juego" src="@/assets/img/XBOX/minecraft.jpg" alt="">
                    <button @click="modalContent('Minecraft', 'Fecha de lanzamiento: 18 de noviembre de 2011')"
                        style="margin-top: 10px;" type="button" class="btn btn-success" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Ver Detalle</button>
                </div>
                <div>
                    <h6 class="tituloX">Pan-Man World:Re-Pac</h6>
                    <img class="juego" src="@/assets/img/XBOX/PacMan.jpg" alt="">
                    <button @click="modalContent('Pan-Man World:Re-Pac', 'Fecha de lanzamiento: 25 de agosto de 2022')"
                        style="margin-top: 10px;" type="button" class="btn btn-success" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Ver Detalle</button>
                </div>
                <div>
                    <h6 class="tituloX">Stray</h6>
                    <img class="juego" src="@/assets/img/XBOX/stray.jpg" alt="">
                    <button @click="modalContent('Stray', 'Fecha de lanzamiento: 19 de julio de 2022')"
                        style="margin-top: 10px;" type="button" class="btn btn-success" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Ver Detalle</button>
                </div>
                <div>
                    <h6 class="tituloX">Hogwarts: Legacy</h6>
                    <img class="juego" src="@/assets/img/XBOX/HarryPotter.jpg" alt="">
                    <button @click="modalContent('Hogwarts: Legacy', 'Fecha de lanzamiento: 10 de febrero de 2023')"
                        style="margin-top: 10px;" type="button" class="btn btn-success" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Ver Detalle</button>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{{ modalTitle }}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img class="img-fluid, imgM" src="@/assets/img/XBOX/xbox.jpg" alt="">
                            <p>{{ modalBody }}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.bgX {
    display: flex;
    background-image: url('@/assets/img/XBOX/bgx.jpg');
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-size: cover;
    padding-bottom: 200px;
    width: 100%;
}

.tituloX {
    color: aliceblue;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.imgF {
    height: 150px;
    width: 850px;
    object-fit: cover;
}

.juego {
    height: 200px;
}

.listaJ {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding-top: 20px;
}

.listaJ div {
    flex: 1 1 200px;
    max-width: 250px;
    text-align: center;
    margin: 0 auto;
}

.listaJ div {
    flex: 0 1 200px;
    max-width: 250px;
    margin: 0 auto;
}

.modal-body {
    display: flex;
    margin: 10px;
}

.imgM {
    height: 150px;
    width: auto;
}

p {
    margin-left: 10px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            modalTitle: '',
            modalBody: '',
        }
    },
    methods: {
        modalContent(title: string, body: string) {
            this.modalTitle = title,
                this.modalBody = body
        }
    }

})
</script>