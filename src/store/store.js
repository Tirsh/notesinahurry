import {configureStore} from "@reduxjs/toolkit";
import notes from './../components/notesList/notesSlice'
import form from './../components/form/formSlice'

export const store = configureStore({
    reducer: {notes, form},
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})