<template>
    <div >
        <NoticiasComp/>
    </div>

</template>


<script lang="ts">
    import NoticiasComp from '@/components/NoticiasComp.vue';
    import {defineComponent} from 'vue'

    export default defineComponent ({
    components:{NoticiasComp}

})
</script>