<template>
    <div class="bgCon">
        <div>
            <h3 class="tituloCon">¿Necesita información adicional sobre un juego?</h3>
            <h4 class="tituloCon">¡Llene el siguiente formulario y lo contactaremos!</h4>
            <div class="formulario">
                <div>
                    <input class="form-control" id="nombre" type="text" v-model="formData.nombre" :class="{ 'is-invalid': formErrors.nombre }"
                    @change="validateField('nombre')" placeholder="Nombre completo">
                </div>
                <div>
                    <input class="form-control" id="numero" v-model="formData.numero" :class="{ 'is-invalid': formErrors.numero }"
                    @change="validateField('numero')" placeholder="Número de teléfono">
                </div>
                <div>
                    <input class="form-control" id="email" v-model="formData.email" :class="{ 'is-invalid': formErrors.email }"
                    @change="validateField('email')" placeholder="Correo">
                </div>
                <div>
                    <textarea class="form-control" id="comentario" v-model="formData.comentario" :class="{ 'is-invalid': formErrors.comentario }"
                    @change="validateField('comentario')" placeholder="Comentario"></textarea>
                </div>
                <div class>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="validateForm" >Enviar</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-show="showModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ modalTitle }}</h1>
                    <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <p>{{ modalMessage }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"  @click="closeModal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.bgCon{
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('@/assets/img/Contacto/bgCon.jpg');
    background-size: cover;
    height: 650px;
    width: auto;
    padding-bottom: 59px;
    padding-top: 25px;
    margin: auto;
}
.tituloCon
{
    color: aliceblue;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
.formulario
{
    margin-left: 110px;
    width: 300px;
}
.form-control
{
    margin: 20px;
}
button
{
    margin-top: 15px;
    margin: 200px;
}

</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
data() {
    return {
        formData: {
        nombre: '',
        numero: '',
        email: '',
        comentario: '',
        },
        formErrors: {
        nombre: false,
        numero: false,
        email: false,
        comentario: false, 
        },
        showModal: false,
        modalTitle: '',
        modalMessage: '',
    };
    },
    methods: {
    validateField(field: 'nombre' | 'numero' | 'email' | 'comentario') {
        this.formErrors[field] = !this.formData[field];
    },
    validateForm() {
    let isValid = true;
        
        for (const field in this.formErrors) {
            this.validateField(field as 'nombre' | 'numero' | 'email' | 'comentario');
            if (this.formErrors[field as 'nombre' | 'numero' | 'email' | 'comentario']) {
            isValid = false;
        }
        }

        if (isValid) {
            this.modalTitle = 'Información Enviada';
            this.modalMessage = '¡Ya tenemos tu información te estaremos contactando en dos días aproximadamente, Gracias!';
        } 
        else {
            this.modalTitle = 'Error en el Formulario';
            this.modalMessage = 'Por favor, completa todos los campos que estén en rojo antes de enviar el formulario.';
        }

        this.showModal = true;
        },
        closeModal() {
        this.showModal = false;
        }
    }
});
</script>