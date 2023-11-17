"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotesList = void 0;
var _reactRedux = require("react-redux");
var _notesSlice = require("./notesSlice");
var _reactResponsiveMasonry = _interopRequireWildcard(require("react-responsive-masonry"));
var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));
require("./notesList.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const NotesList = () => {
  const dispatch = (0, _reactRedux.useDispatch)();
  const notes = (0, _reactRedux.useSelector)(_notesSlice.notesSelector.selectAll).reverse();
  const renderNotes = () => notes.map(item => {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("article", {
      className: "notesList__note",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "notesList__date",
        children: item.date
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "notesList__title",
        children: item.title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "notesList__text",
        children: (0, _htmlReactParser.default)(item.data)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        onClick: () => {
          dispatch((0, _notesSlice.delNote)(item.id));
        },
        className: "notesList__close",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          width: "10",
          height: "10",
          viewBox: "0 0 50 50",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: "M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
          })
        })
      })]
    }, item.id);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "notesList center",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactResponsiveMasonry.ResponsiveMasonry, {
      columnsCountBreakPoints: {
        350: 1,
        750: 2,
        900: 3
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactResponsiveMasonry.default, {
        children: renderNotes()
      })
    })
  });
};
exports.NotesList = NotesList;
//# sourceMappingURL=NotesList.js.map