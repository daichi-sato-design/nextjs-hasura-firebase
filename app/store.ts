import { configureStore } from '@reduxjs/toolkit'

import uiReducer from '../slices/uiSlice'

// configureStore 複数のreducerをまとめて、storeに格納する
export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
})

// RootState storeに定義されているすべてのstateを取得し、typeofでデータ型をまとめて取得する
export type RootState = ReturnType<typeof store.getState>
