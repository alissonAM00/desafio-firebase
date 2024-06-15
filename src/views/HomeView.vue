<template>
  <div class="home text-center">
  <FormComp/>
  <ListComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions} from "vuex"
import FormComp from "../components/FormComp.vue"
import ListComponent from "@/components/ListComponent.vue";
export default {
  name: 'HomeView',
  components: {
    FormComp,
    ListComponent
  },
  methods:{
    ...mapActions(["setUsers"])
  },
  async mounted(){
   await this.setUsers()
  }
}
</script>