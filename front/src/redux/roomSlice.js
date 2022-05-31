import { createSlice } from '@reduxjs/toolkit'

const initialState = 'msg'

const actions = {
    setRoom: (state, action) => {
      console.log(action.payload);
      state = action.payload
      return state
    }
}

export const roomSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: actions
})


export const { setRoom } = roomSlice.actions

export default roomSlice.reducer