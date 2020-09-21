import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import dogs from "@/assets/dogs.json";

export default new Vuex.Store({
  state: {
    dogs: dogs
  },
  mutations: {
  },
  actions: {
  },
  getters: { //Used for bigger applications
            //Each module can have its own state, mutations and getters
    dog(state) {
      return (chipNr) => {
        // filter() creates a new array will all filtered elements conitaing dog chipNumber.  
        return state.dogs.filter(dog => dog.chipNumber === chipNr)[0]
     }
   },
   dogCount(state) {
     return state.dogs.length;
   }
  }
})
