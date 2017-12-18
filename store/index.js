import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      // neu
      themen: [
        {
          themaTitel: 'Botschaften des Glaubens',
          themaAbstract: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum in  in vulputate velit esse.',
          themaDarstellung: ''
        },
        {
          themaTitel: 'Magische Steine - Dämonenabwehr',
          themaAbstract: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
          themaDarstellung: ''
        },
        {
          themaTitel: 'Bauzeichen',
          themaAbstract: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.',
          themaDarstellung: ''
        },
        {
          themaTitel: 'Spuren des Alltags',
          themaAbstract: 't accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore.',
          themaDarstellung: ''
        }
      ],
      themaIndex: 0,
      backsteine: [
        {
          messbild: '/Stein_E_Lage.jpg',
          detailStein: '/Stein_E_Inschrift.jpg',
          previewStein: 'background-image: url(/stein_E_Inschrift.jpg)',
          titelStein: 'Kain und Abel',
          sigleStein: 'Inschrift F',
          transStein: 'Ein Abel kann der nicht werden, den Kain mit seiner Bosheit nicht plagt.',
          transLatStein: 'Abel fieri no[n] ualet / Si malicia no[n] exercet.',
          textStein: 'Die Inschrift ist ein - leicht verderbtes - Zitat aus den Predigten Gregors d. Gr. über den Propheten Ezeziel. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          planPos: {
            x: 50,
            y: 96
          }
        },
        {
          messbild: '/Stein_F_Lage.jpg',
          detailStein: '/Stein_F_Inschrift.jpg',
          previewStein: 'background-image: url(/stein_F_Inschrift.jpg)',
          titelStein: 'Klösterliche Mahlzeit',
          sigleStein: 'Inschrift E',
          transStein: '... ein großes Abendessen',
          transLatStein: 'cenam / m[a]gnam',
          textStein: 'Die Inschrift greift eine Stelle aus dem Lukasevangelium auf, die in der Übersetzung Luthers lautet: "Es war ein Mensch, der machte ein groß Abendmahl ..." Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
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
      getBackstein (state) {
        return state.backsteine[state.steinIndex]
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
      getSigleStein (state) {
        return state.backsteine[state.steinIndex].sigleStein
      },
      getTransStein (state) {
        return state.backsteine[state.steinIndex].transStein
      },
      getTextStein (state) {
        return state.backsteine[state.steinIndex].textStein
      },
      getPlanPos (state) {
        return state.backsteine[state.steinIndex].planPos
      },
      getThemen (state) {
        return state.themen
      },
      getThema (state) {
        return state.themen[state.themaIndex]
      },
      getThemaId (state) {
        return function (id) {
          return state.themen[id]
        }
      },
      getThemaIndex (state) {
        return state.themen[state.themaIndex]
      },
      // Alt
      getStein (state) {
        return state.steinAktuell
      },
      getSteine (state) {
        return state.steine
      }
    },
    mutations: {
      changeThema (state, payload) {
        state.themaIndex = payload
      },
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
      changeThema (context, payload) {
        context.commit('changeThema', payload)
      },
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
