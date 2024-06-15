<template>
  <h1 class="text-white py-2">agregar usuario</h1>
  <div class="row d-flex justify-content-center ">
    <form @submit.prevent="add" class="col-8 bg-dark text-white fs-3">
      <div class="mb-3 ">
        <label for="name" class="form-label ">Nombre: </label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          required
          v-model="user.nombre"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Correo: </label>
        <input
          type="email"
          class="form-control"
          id="email"
          required
          v-model="user.correo"
        />
      </div>
      <div class="mb-3">
        <label for="rut" class="form-label">Telefono: </label>
        <input
          type="text"
          class="form-control"
          id="rut"
          required
          v-model="user.telefono"
        />
      </div>
      <button type="submit" class="btn ui-btn my-3">Agregar</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "FormComponent",
  // props: {},
  data: function () {
    return {
      user: {
        nombre: "",
        correo: "",
        telefono: "",
      },
    };
  },
  // aqui mapState trae el estado
  computed: {
    ...mapState(["users"]),
  },
  // aqui mapActions y el nombre de la funcion
  methods: {
    ...mapActions(["addUser"]),
    add() {
      if (confirm("¿quieres agregar este usuario?")) {
        this.addUser(this.user);
        this.user.nombre = "";
        this.user.correo = "";
        this.user.telefono = "";
      } else {
        this.user.nombre = "";
        this.user.correo = "";
        this.user.telefono = "";
      }
    },
  },
};
// watch: {},
// components: {},
// mixins: [],
// filters: {},
// -- Lifecycle Methods
// -- End Lifecycle Methods
</script>

<style scoped>
.ui-btn {
  cursor: pointer;
  border-radius: 5px;
  color: rgb(219, 218, 218);
  border-style: solid;
  background-color: transparent;
  border-color: rgb(219, 218, 218);
  width: 120px;
  height: 40px;
  transition: 0.2s ease;
  text-transform: uppercase;
  border-width: 2px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 2px;
}
.ui-btn:hover {
  color: rgb(247, 247, 247);
  background-color: rgb(47, 14, 229);
  border-color: rgb(47, 14, 229);
  text-shadow: 0 0 50px white, 0 0 20px white, 0 0 15px white;
  box-shadow: 0 0 50px rgb(47, 14, 229), 0 0 30px rgb(47, 14, 229),
    0 0 60px rgb(47, 14, 229), 0 0 120px rgb(47, 14, 229);
  font-size: 20px;
  width: 130px;
  height: 50px;
  letter-spacing: 3px;
}
.ui-btn:active {
  width: 115px;
  height: 38px;
  letter-spacing: 0px;
}
label{
  color: rgb(126, 216, 30) ;
}
input{
  font-family: 'Courier New', Courier, monospace;
}
</style>