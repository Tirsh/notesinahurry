"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notesSelector = exports.delNote = exports.default = exports.addNotes = exports.addNote = void 0;
var _toolkit = require("@reduxjs/toolkit");
const noteAdapter = (0, _toolkit.createEntityAdapter)();
const initialState = noteAdapter.getInitialState();
const notesSlice = (0, _toolkit.createSlice)({
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
      noteAdapter.removeOne(state, action.payload);
    }
  }
});
const {
  actions,
  reducer
} = notesSlice;
const notesSelector = exports.notesSelector = noteAdapter.getSelectors(state => state.notes);
var _default = exports.default = reducer;
const {
  addNote,
  addNotes,
  delNote
} = actions;
exports.delNote = delNote;
exports.addNotes = addNotes;
exports.addNote = addNote;
//# sourceMappingURL=notesSlice.js.map