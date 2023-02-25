import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'addUser',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        removeLastTodo(state) {
            state.pop()
        }
    }
})
export const { addUser, removeLastTodo } = userSlice.actions  
export default userSlice.reducer