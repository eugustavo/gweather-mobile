import { configureStore } from '@reduxjs/toolkit'

import sliceActiveSearch from './slices/activeSearch'
import slicePosition from './slices/position'
import sliceLocation from './slices/location'

const store = configureStore({
  reducer: {
    activeSearch: sliceActiveSearch,
    position: slicePosition,
    location: sliceLocation,
  },
})

export default store
