<template>

  <section class="src-componentes-formulario">
    <div class="jumbotron">
      <h2>Componente FormularioAv</h2>
      <hr>
      <hr>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">
    
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            name="nombre" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.nombre" 
            required 
            :minlength="nombreMinLength"
            no-espacios
          />

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{nombreMinLength}} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label for="apellido">Apellido</label>
          <input 
            type="text"
            id="apellido"
            name="apellido" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.apellido" 
            required 
          />

          <field-messages name="apellido" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          </field-messages>
        </validate>
        <br>

        
        <validate tag="div">
          <label for="edad">Edad</label>
          <input 
            type="number"
            id="edad"
            name="edad" 
            class="form-control"
            autocomplete="off"
            v-model.number="formData.edad" 
            required 
            :min="edadMin"
            :max="edadMax"
          />

          
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima permitida es de {{edadMin}} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima permitida es de {{edadMax}} años.
            </div>
          </field-messages>
        </validate>
        <br>

      
        <validate tag="div">
          <label for="email">Email</label>
          <input 
            type="email"
            id="email"
            name="email" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.email" 
            required 
          />

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>
        </validate>
        <br>

        <button class="btn btn-success my-4" :disabled="formState.$invalid">Enviar</button>
      </vue-form>      

    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-formulario-av',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInicialData(),
        nombreMinLength : 3,
        edadMin: 18,
        edadMax: 120
      }
    },
    methods: {
      getInicialData() {
        return {
          nombre: '',
          apellido: '',
          edad: '',
          email: ''
        }
      },
      enviar() {
        console.log({ ...this.formData })

        this.formData = this.getInicialData() 
        this.formState._reset()  
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-formulario-av {

  }

  .jumbotron {
      background-color: rgb(20, 170, 170);
      color: white;
  }

  hr {
      background-color: #bbb;
  }  

</style>
