import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'

const store = configureStore({
    reducer: {
        users: userSlice,
        devTools: true
    }
})

export default store