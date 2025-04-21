import { createSlice } from "@reduxjs/toolkit";


const initialAuthState = { isAuthenticated: false, username: ''};


const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.username = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer;