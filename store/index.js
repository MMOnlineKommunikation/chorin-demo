import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      // neu
      modus: 'auswahl',
      backsteine: [
        {
          messbild: '/Stein_E_Lage.jpg',
          detailStein: '/Stein_E_Inschrift.jpg',
          previewStein: 'background-image: url(/stein_E_Inschrift.jpg)',
          titelStein: 'Titel Stein E',
          textStein: 'Text Stein E',
          planPos: {
            x: 50,
            y: 96
          }
        },
        {
          messbild: '/Stein_F_Lage.jpg',
          detailStein: '/Stein_F_Inschrift.jpg',
          previewStein: 'background-image: url(/stein_F_Inschrift.jpg)',
          titelStein: 'Titel Stein F',
          textStein: 'Text Stein F',
          planPos: {
            x: 215,
            y: 196
          }
        }
      ],
      steinIndex: 0,
      // Import
      counter: 0,
      test: {},
      steinAktuell: {},
      steine: [],
      indexAktuell: '',
      errors: []
    },
    getters: {
      getBacksteine (state) {
        return state.backsteine
      },
      getMediaDisplayBG (state) {
        return state.backsteine[state.steinIndex].previewStein
      },
      getMessbild (state) {
        return state.backsteine[state.steinIndex].messbild
      },
      getDetailStein (state) {
        return state.backsteine[state.steinIndex].detailStein
      },
      getTitelStein (state) {
        return state.backsteine[state.steinIndex].titelStein
      },
      getTextStein (state) {
        return state.backsteine[state.steinIndex].textStein
      },
      getPlanPos (state) {
        return state.backsteine[state.steinIndex].planPos
      },
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
      changeSteinIndex (state, payload) {
        const max = state.backsteine.length
        let steinIndexNeu = state.steinIndex + payload
        if (steinIndexNeu >= max) {
          steinIndexNeu = 0
        }
        if (steinIndexNeu < 0) {
          steinIndexNeu = max - 1
        }
        state.steinIndex = steinIndexNeu
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
      changeSteinIndex (context, payload) {
        context.commit('changeSteinIndex', payload)
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
