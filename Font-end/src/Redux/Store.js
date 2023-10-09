import { configureStore } from '@reduxjs/toolkit';
import userImageReducer from './userImageReducer';
import userNameReducer from './userNameReducer';

const store = configureStore({
    reducer: {
        username: userNameReducer
        ,
        userImage: userImageReducer,

    },
})

export default store;