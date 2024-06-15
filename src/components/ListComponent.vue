<template>
  <div class="list py-5">
    <header>
      <h1 class="text-white">Lista de Usuarios Agregados</h1>
    </header>
    <main>
    <div class="container">
      <div class="tabla row text-warning">
          <table class="table fs-4 table-dark align-middle table-bordered">
            <thead class="">
              <tr class="">
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">telefono</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody >
              <tr v-for="(user, index) in users" :key="user.id" >
                <th >{{ index + 1 }}</th>
                <td >{{ user.nombre }}</td>
                <td >{{ user.correo }}</td>
                <td >{{ user.telefono }}</td>
                <td> 
                  <button
                  class="btn ui-btn my-2"
                  @click="handleDeleteUser(user.id)"
                >
                  Eliminar
                </button></td>
              </tr>
            </tbody>
          </table>

      </div>
    </div>
  </main>
  </div>
</template>
  
  <script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ListComponent",
  props: {
    user: Array,
  },
  computed: {
    ...mapState(["users"]),
  },
  methods: {
    ...mapActions(["deleteUser"]),

    handleDeleteUser(id) {
      if(window.confirm("estas intentando eliminar este usuario")){
      console.log("Intentando eliminar usuario con id:", id);
      alert('Usuario eliminado correctamente.');
      this.deleteUser(id).catch((error) => {
        console.error("Error al eliminar usuario:", error);
      });
    }
    },
  },
};
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
  background-color: rgb(169, 9, 9);
  border-color: rgb(169, 9, 9);
  text-shadow: 0 0 50px white, 0 0 20px white, 0 0 15px white;
  box-shadow: 0 0 50px rgb(169, 9, 9), 0 0 30px rgb(169, 9, 9),
    0 0 60px rgb(169, 9, 9), 0 0 120px rgb(169, 9, 9);
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

table, th{
  color: rgb(142, 231, 47);
}

td{
  color: rgb(236, 66, 66);
}

</style>