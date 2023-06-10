import { createSlice } from '@reduxjs/toolkit'

interface SearchState {
  activeSearch: boolean
}

const INITIAL_STATE: SearchState = {
  activeSearch: false,
}

const sliceActiveSearch = createSlice({
  name: 'activeSearch',
  initialState: INITIAL_STATE,
  reducers: {
    toggleActiveSearch: (state) => {
      state.activeSearch = !state.activeSearch
    },
  },
})

export default sliceActiveSearch.reducer

export const { toggleActiveSearch } = sliceActiveSearch.actions

export const useSearch = (state: any) => {
  return state.activeSearch as SearchState
}
