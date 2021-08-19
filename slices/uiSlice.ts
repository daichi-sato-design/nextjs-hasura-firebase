import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { EditNews, EditTask } from '../types/types'
import { RootState } from '../app/store'

// uiState Reduxの中で管理するstateを定義
export interface uiState {
  editedTask: EditTask
  editedNews: EditNews
}

// Reduxで管理するstateの初期値を設定
const initialState: uiState = {
  editedTask: {
    id: '',
    title: '',
  },
  editedNews: {
    id: '',
    content: '',
  },
}

// createSlice Sliceを作成
export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // setEditedTask(設定用のAction) 引数で EditTask を受け取る
    setEditedTask: (state, action: PayloadAction<EditTask>) => {
      state.editedTask = action.payload
    },
    // resetEditedTask(リセット用のAction)
    resetEditedTask: (state) => {
      state.editedTask = initialState.editedTask
    },
    // setEditedNews(設定用のAction) 引数で EditNews を受け取る
    setEditedNews: (state, action: PayloadAction<EditNews>) => {
      state.editedNews = action.payload
    },
    // resetEditedNews(リセット用のAction)
    resetEditedNews: (state) => {
      state.editedNews = initialState.editedNews
    },
  },
})

// ReducerActionをComponentから呼び出せるようにexportする
export const {
  setEditedTask,
  resetEditedTask,
  setEditedNews,
  resetEditedNews,
} = uiSlice.actions

// ComponentからReduxの中のStateを取得するための関数を作成
// selectTask uiSliceの中にあるeditedTaskのStateにアクセスし、データを返す関数
export const selectTask = (state: RootState) => state.ui.editedTask
// selectNews uiSliceの中にあるeditedNewsのStateにアクセスし、データを返す関数
export const selectNews = (state: RootState) => state.ui.editedNews

export default uiSlice.reducer
