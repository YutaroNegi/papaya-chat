import { createSlice } from '@reduxjs/toolkit'

const initialState = {username: '', userID: ''}

const actions = {
    setUser: (state, action) => {
        state.username = action.payload.username
        state.userID = action.payload.userID
    }
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: actions
})


export const { setUser } = userSlice.actions

export default userSlice.reducer