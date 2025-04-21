import {configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';




const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer}
});


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
