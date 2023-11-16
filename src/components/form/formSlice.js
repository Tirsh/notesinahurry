import {createSlice} from "@reduxjs/toolkit";

    const initialState = {
        titleText: '',
        noteText: ''
    }
const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setTitleText: (state, action) => {
            state.titleText = action.payload;
        },
        setNoteText: (state, action) => {
            state.noteText = action.payload;
        }
    }
});

const {actions, reducer} = formSlice;
export default reducer;
export const {
    setTitleText,
    setNoteText,
    addMarking
} = actions;