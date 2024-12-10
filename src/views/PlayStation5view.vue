<template>
    <div class="bgP">
        <div class="container">
            <img class="imgF" src="@/assets/img/PS5/psFondo.jpg" alt="PS5">
            <div class="listaJ">
                <div>
                    <h6 class="tituloP">Call of Duty</h6>
                    <img class="juego" src="@/assets/img/PS5/callOfDuty.jpg" alt="">
                    <button
                        @click="modalContent('Call of Duty: Black OPS 6', 'Fecha de lanzamiento: 25 de octubre de 2024')"
                        style="margin-top: 10px;" type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Ver Detalle</button>
                </div>
                <div>
                    <h6 class="tituloP">Diablo IV</h6>
                    <img class="juego" src="@/assets/img/PS5/diablo.jpg" alt="">
                    <button @click="modalContent('Diablo IV', 'Fecha de lanzamiento: 5 de junio de 2023')"
                        style="margin-top: 10px;" type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Ver Detalle</button>
                </div>
                <div>
                    <h6 class="tituloP">Silent Hill: Remake</h6>
                    <img class="juego" src="@/assets/img/PS5/Silent-Hill-2.jpg" alt="">
                    <button @click="modalContent('Silent Hill 2: Remake', 'Fecha de lanzamiento: 8 de octubre de 2024')"
                        style="margin-top: 10px;" type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Ver Detalle</button>
                </div>
                <div>
                    <h6 class="tituloP">Spiderman: Miles M.</h6>
                    <img class="juego" src="@/assets/img/PS5/Spiderman.jpg" alt="">
                    <button
                        @click="modalContent('Spiderman: Miles Morales', 'Fecha de lanzamiento: 12 de noviembre de 2020')"
                        style="margin-top: 10px;" type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Ver Detalle</button>
                </div>
                <div>
                    <h6 class="tituloP">Madden NFL 25</h6>
                    <img class="juego" src="@/assets/img/PS5/madden25.jpg" alt="">
                    <button @click="modalContent('Madden NFL 25', 'Fecha de lanzamiento: 16 de agosto de 2024')"
                        style="margin-top: 10px;" type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Ver Detalle</button>
                </div>
            </div>
            <div class="modal fade modal-sm" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{{ modalTitle }}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img class="img-fluid, imgM" src="@/assets/img/PS5/ps5.jpg" alt="">
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
.bgP {
    display: flex;
    background-image: url('@/assets/img/PS5/bg.jpg');
    background-size: cover;
    padding-bottom: 200px;

}

.imgF {
    height: 150px;
    width: 850px;
    object-fit: cover;
}

.tituloP {
    color: aliceblue;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.juego {
    height: 200px;
}

.listaJ {
    display: flex;
    padding-top: 20px;
}

.listaJ div {
    flex: 0 1 200px;
    /* Fija un ancho mínimo de 200px, pero no permite que crezcan */
    max-width: 250px;
    /* Define un límite superior para el ancho */
    margin: 0 auto;
    /* Asegura que estén centradas */
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