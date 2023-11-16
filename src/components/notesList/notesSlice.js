import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

const noteAdapter = createEntityAdapter();
const initialState = noteAdapter.getInitialState();
const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            noteAdapter.addOne(state, action.payload);
        },
        addNotes: (state, action) => {
            noteAdapter.addMany(state, action.payload);
        },
        delNote: (state, action) => {
            noteAdapter.removeOne(state, action.payload)
        }
    }
})

const {actions, reducer} = notesSlice;
export const notesSelector = noteAdapter.getSelectors((state) => state.notes);

export default reducer;
export const {
    addNote,
    addNotes,
    delNote
} = actions;