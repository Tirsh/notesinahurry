"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;
require("./form.scss");
var _reactRedux = require("react-redux");
var _notesSlice = require("../notesList/notesSlice");
var _formSlice = require("./formSlice");
var _uuid = require("uuid");
var _dateUtil = require("../../utils/dateUtil");
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
const Form = () => {
  const noteInput = (0, _react.useRef)(null);
  const dispatch = (0, _reactRedux.useDispatch)();
  const {
    titleText,
    noteText
  } = (0, _reactRedux.useSelector)(state => state.form);
  (0, _react.useEffect)(() => {
    noteInput.current.innerHTML = noteText;
    const range = document.createRange();
    range.selectNodeContents(noteInput.current);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }, [noteText]);
  const makeHighlight = e => {
    e.preventDefault();
    if (window.getSelection() == '' || window.getSelection().anchorNode.parentNode.closest("div").getAttribute('id') !== 'edit') {
      return;
    }
    const range = window.getSelection().getRangeAt(0);
    const selectionContents = range.extractContents();
    const span = document.createElement("span");
    span.appendChild(selectionContents);
    span.classList.add('highlighted');
    range.insertNode(span);
    onNoteChange();
  };
  const submitHandler = e => {
    e.preventDefault();
    const form = document.querySelector('form');
    const formData = new FormData(form);
    dispatch((0, _notesSlice.addNote)({
      id: (0, _uuid.v4)(),
      title: formData.get('title'),
      date: (0, _dateUtil.getCurrentDateString)(),
      data: noteInput.current.innerHTML
    }));
    handleClear();
  };
  const onTitleChange = e => {
    e.preventDefault();
    const value = e.target.value;
    dispatch((0, _formSlice.setTitleText)(value));
  };
  const onNoteChange = e => {
    dispatch((0, _formSlice.setNoteText)(noteInput.current.innerHTML));
  };
  const handleClear = () => {
    dispatch((0, _formSlice.setTitleText)(''));
    noteInput.current.innerHTML = '';
  };
  const handlePaste = e => {
    e.stopPropagation();
    e.preventDefault();
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "container",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
      onSubmit: submitHandler,
      className: "form",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "form__row",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "form__col form__col_25",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "form__label",
            htmlFor: "subject",
            children: "Your note title:"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "form__col form__col_75",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            onChange: onTitleChange,
            className: "form__input",
            value: titleText,
            type: "text",
            name: "title",
            placeholder: "Add title"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "form__row",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          onClick: makeHighlight,
          className: "form__btn_highlight",
          children: "Highlight"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "form__col form__col_25",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            htmlFor: "subject",
            children: "Your note content:"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "form__col form__col_75",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            onPaste: handlePaste,
            ref: noteInput,
            onInput: onNoteChange,
            id: "edit",
            contentEditable: "true",
            "data-placeholder": "Start writing...",
            className: "form__input form__input_textarea"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "form__row",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          className: "form__btn",
          type: "submit",
          value: "Add note"
        })
      })]
    })
  });
};
exports.Form = Form;
//# sourceMappingURL=Form.js.map