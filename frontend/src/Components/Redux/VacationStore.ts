// npm i redux ,,, npm i @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
import { VacationReducer } from "./VacationReducer";
// import { UsersReducer } from "./UsersReducer";
// users: UsersReducer

// choose all the reducers

const reducers = { vacations: VacationReducer };

// combine reducers

export const mainReducer = configureStore({
    reducer:reducers,
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare({ serializableCheck: false }), //do not look on serialization errors
});