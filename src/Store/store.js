//import { createStore } from "redux";
//export const store = createStore();

import { configureStore, createSlice } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todosSlice'
import filtersReducer from '../features/filters/filtersSlice'

const reducerSlice = createSlice({
  name: 'store',
  initialState: {},
  reducers: {
     someAction: function() {

     }
  }
})

export const store = configureStore({
  reducer: {
    todos: todosReducer.reducer,
    filters: filtersReducer.reducer
  }
})