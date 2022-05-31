<template>
 <div class="container-fluid mt-3">
   <div class="jumbotron">
     <h1> TP4 - Formulario</h1>
     <hr>
     <NavBar/>
     <router-view></router-view>


   </div>
 </div>

</template>

<script>
import NavBar from './componentes/NavBar.vue'



export default {
  name: 'App',
  components: {
  
    NavBar
  }
}
</script>

<style>
 h1{
   color:rgb(239, 18, 173);
 }
</style>
