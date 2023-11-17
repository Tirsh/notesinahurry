"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTitleText = exports.setNoteText = exports.default = exports.addMarking = void 0;
var _toolkit = require("@reduxjs/toolkit");
const initialState = {
  titleText: '',
  noteText: ''
};
const formSlice = (0, _toolkit.createSlice)({
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
const {
  actions,
  reducer
} = formSlice;
var _default = exports.default = reducer;
const {
  setTitleText,
  setNoteText,
  addMarking
} = actions;
exports.addMarking = addMarking;
exports.setNoteText = setNoteText;
exports.setTitleText = setTitleText;
//# sourceMappingURL=formSlice.js.map