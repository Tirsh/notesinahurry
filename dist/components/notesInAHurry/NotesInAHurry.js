"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Form = require("../form/Form");
var _NotesList = require("../notesList/NotesList");
var _reactRedux = require("react-redux");
require("./notesinahurry.scss");
var _store = require("../../store/store");
var _jsxRuntime = require("react/jsx-runtime");
function NotesInAHurry() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRedux.Provider, {
    store: _store.store,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "App center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Form.Form, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NotesList.NotesList, {})]
    })
  });
}
var _default = exports.default = NotesInAHurry;
//# sourceMappingURL=NotesInAHurry.js.map