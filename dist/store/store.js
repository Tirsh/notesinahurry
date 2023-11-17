"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _notesSlice = _interopRequireDefault(require("./../components/notesList/notesSlice"));
var _formSlice = _interopRequireDefault(require("./../components/form/formSlice"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const store = exports.store = (0, _toolkit.configureStore)({
  reducer: {
    notes: _notesSlice.default,
    form: _formSlice.default
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware()
});
//# sourceMappingURL=store.js.map