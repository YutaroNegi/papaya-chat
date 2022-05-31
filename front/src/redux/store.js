import { configureStore } from '@reduxjs/toolkit'
import roomSlice from './roomSlice'
import userSlice from './userSlice'

export default configureStore({
  reducer: {
    user: userSlice,
    room: roomSlice
  },
})