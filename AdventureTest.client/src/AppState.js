import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  music: false,
  game: 0,
  activeAnswer: null,
  answers: [],
  correctAnswer: null,
  strikes: 0,
  help: '',
  state: 0,
  location: {'x': 5, 'y': 3},
  coords: {}
})
