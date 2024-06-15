import { createStore } from 'vuex'
import firebaseApp from "../firebaseConfig";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
 deleteDoc,
 doc
} from "firebase/firestore";

export default createStore({
  state: {
    users:[]
  },
  getters: {
  },
  mutations: {
    //SET_USERS actualiza el estado de los usuarios  de firestore
    SET_USERS(state, users) {
      state.users = users
    },
    //ADD_USER agrega un nuevo usuario al estado
    ADD_USER(state, user) {
      state.users.push(user)
    },
    
    //UPDATE_USER actualiza un usuario existente en el estado
    UPDATE_USER(state, updateUser) {
      const index = state.users.findIndex(user => user.id === updateUser.id)
      state.users.splice(index, 1,updateUser);//para actualizar de forma directa
    },
    //DELETE_USER elimina un usuario globalmente
    DELETE_USER(state, userId) {
      state.users = state.users.filter(user => user.id !== userId)
    }
  },
  actions: {
    //asegura que los datos esten de manera consistente en toda LA APP actuando como intermediario entre los comp y el estadode la app
    async setUsers({commit}){
      let userReceived = [];
      try {
        let db = getFirestore(firebaseApp);
        let userRef = collection(db, "users");
        onSnapshot(userRef, (snapshot) => {
          userReceived = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          commit("SET_USERS", userReceived);

          
        });
      } catch (error) {
        console.log(error);
      }
      
    },
    async addUser(context, user){
     try {
      let db = getFirestore(firebaseApp);
      let userRef = collection(db, "users");
      await addDoc(userRef, user);
      } catch (error) {
        console.log(error);
        }
        
    },
    async deleteUser(context, userId){
    try {
      let db = getFirestore(firebaseApp);
      let userRef = doc(db, "users", userId);
      await deleteDoc(userRef);
      } catch (error) {
        console.log(error);
        }
    },
  },
  modules: {},
});
