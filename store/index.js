import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      test: {},
      steinAktuell: {},
      steine: [],
      indexAktuell: '',
      errors: []
    },
    getters: {
      getStein (state) {
        return state.steinAktuell
      },
      getSteine (state) {
        return state.steine
      }
    },
    mutations: {
      changeCounter (state, payload) {
        state.counter += payload
      },
      setStein (state, payload) {
        state.steinAktuell = state.steine[payload]
      },
      loadSteine (state) {
        axios.get('http://chorin.culture-to-go.de/wp-json/wp/v2/steine')
          .then((response) => {
            state.steine = response.data
          })
          .catch((e) => {
            state.errors.push(e)
          })
      }
    },
    actions: {
      changeCounter (context, payload) {
        context.commit('changeCounter', payload)
      },
      setStein (context, payload) {
        context.commit('setStein', payload)
      },
      loadSteine (context) {
        context.commit('loadSteine')
      }
    }
  })
}

export default createStore
