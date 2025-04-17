import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, toggleVisible: true };
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

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        decrement(state) {
            state.counter--
        },
        toggle(state) {
            state.toggleVisible = !state.toggleVisible
        }
    }
})


const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             toggleVisible: state.toggleVisible
//         }
//     }

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             toggleVisible: state.toggleVisible
//         }
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             toggleVisible: state.toggleVisible
//         }
//     }

//     if (action.type === 'toggle') {
//         return {
//             toggleVisible: !state.toggleVisible,
//             counter: state.counter,
//         }
//     }

//     return state;
// }

// const store = createStore(counterReducer);

export default store;
