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
  location: { 'x': 6, 'y': 8 },
  deadCells: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 75, 77, 21, 11, 31, 41, 51, 61, 71, 72, 73, 74, 80, 79, 78, 20, 30, 40, 50, 60, 70, 55, 54, 53, 43, 33, 23, 22, 35, 25, 15, 57, 47, 37, 27, 28, 29, 38, 48, 58],
  doors: [45,65,67],
  deadCoords: []
})
