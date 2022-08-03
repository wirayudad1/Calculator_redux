import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux'
import counterReducer from '../features/calculator/calc_controller';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// function todos(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return state.concat([action.text])
//     default:
//       return state
//   }
// }
// export const storegrid = createStore((todos, ['Use Redux']))
