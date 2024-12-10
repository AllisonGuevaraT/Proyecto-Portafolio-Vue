<template>
    <div>
        <div class="bgN">
            <div class="container">
                <img class="imgF" src="@/assets/img/Nintendo/bannerNintendo.jpg" alt="Nintendo">
                <div class="listaJ">
                    <div>
                        <h6 class="tituloN">Luigi's Mansion 3</h6>
                        <img class="juego" src="@/assets/img/Nintendo/luigisMansion.jpg" alt="">
                        <button @click="modalContent('Luigis Mansion 3', 'Fecha de lanzamiento: 31 de octubre de 2019')"
                            style="margin-top: 10px;" type="button" class="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">Ver Detalle</button>
                    </div>
                    <div>
                        <h6 class="tituloN">Super Mario Bros Wonder</h6>
                        <img class="juego" src="@/assets/img/Nintendo/MarioBrosWonder.jpg" alt="">
                        <button
                            @click="modalContent('Super Mario Bros Wonder', 'Fecha de lanzamiento: 20 de octubre de 2023')"
                            style="margin-top: 10px;" type="button" class="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">Ver Detalle</button>
                    </div>
                    <div>
                        <h6 class="tituloN">Metroid Prime </h6>
                        <img class="juego" src="@/assets/img/Nintendo/metroid.jpg" alt="">
                        <button
                            @click="modalContent('Metroid Prime Remastered', 'Fecha de lanzamiento: 8 de febrero de 2023')"
                            style="margin-top: 10px;" type="button" class="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">Ver Detalle</button>
                    </div>
                    <div>
                        <h6 class="tituloN">Pokemon Legend Arceus</h6>
                        <img class="juego" src="@/assets/img/Nintendo/pokemonArceus.jpg" alt="">
                        <button
                            @click="modalContent('Pokemon Legend Arceus', 'Fecha de lanzamiento: 28 de enero de 2022')"
                            style="margin-top: 10px;" type="button" class="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">Ver Detalle</button>
                    </div>
                    <div>
                        <h6 class="tituloN">The Legend of Zelda</h6>
                        <img class="juego" src="@/assets/img/Nintendo/zeldaTearsOfTheKingdom.jpg" alt="">
                        <button
                            @click="modalContent('The Legend of Zelda: Tears of the Kingdom', 'Fecha de lanzamiento: 12 de mayo de 2023')"
                            style="margin-top: 10px;" type="button" class="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">Ver Detalle</button>
                    </div>


                </div>
            </div>
            <div class="modal fade modal-sm" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{{ modalTitle }}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
.bgN {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-image: url('@/assets/img/Nintendo/bgN.jpg');
    background-size: cover;
    padding-bottom: 200px;
    width: 100%;
}

.imgF {
    height: 150px;
    width: 850px;
    object-fit: cover;
}

.tituloN {
    color: aliceblue;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
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