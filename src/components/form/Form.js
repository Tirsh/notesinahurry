import './form.scss'
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {addNote} from "../notesList/notesSlice";
import {setTitleText, setNoteText} from "./formSlice";
import { v4 as uuidv4 } from 'uuid';
import {getCurrentDateString} from "../../utils/dateUtil";
import {useEffect} from "react";
import {useRef} from "react";

export const Form = () => {
    const noteInput = useRef(null);
    const dispatch = useDispatch();
    const {titleText, noteText} = useSelector(state => state.form);

    useEffect(() => {
        noteInput.current.innerHTML = noteText;
        const range = document.createRange();
        range.selectNodeContents(noteInput.current);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }, [noteText])

    const makeHighlight = (e) => {
        e.preventDefault();
        if (window.getSelection() == '' ||
            window.getSelection().anchorNode.parentNode.closest("div").getAttribute('id') !== 'edit') {
            return;
        }
        const range = window.getSelection().getRangeAt(0);
        const selectionContents = range.extractContents();
        const span = document.createElement("span");
        span.appendChild(selectionContents);
        span.classList.add('highlighted');
        range.insertNode(span);
        onNoteChange();
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const form = document.querySelector('form');
        const formData = new FormData(form);
        dispatch(addNote({
            id: uuidv4(),
            title: formData.get('title'),
            date: getCurrentDateString(),
            data: noteInput.current.innerHTML
        }))
        handleClear();
    }

     const onTitleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        dispatch(setTitleText(value));
     }

     const onNoteChange = (e) => {
        dispatch(setNoteText(noteInput.current.innerHTML))
    }

     const handleClear = () => {
         dispatch(setTitleText(''));
         noteInput.current.innerHTML = '';
     }

     const handlePaste = (e) => {
         e.stopPropagation();
         e.preventDefault();
     }

    return (
        <div className="container">
            <form onSubmit={submitHandler} className='form'>
                <div className="form__row">
                    <div className="form__col form__col_25">
                        <label className="form__label" htmlFor="subject">Your note title:</label>
                    </div>
                    <div className="form__col form__col_75">
                        <input onChange={onTitleChange} className="form__input" value={titleText} type="text" name="title" placeholder="Add title"/>
                    </div>
                </div>
                <div className="form__row">
                    <button onClick={makeHighlight} className='form__btn_highlight'>Highlight</button>
                    <div className="form__col form__col_25">
                        <label htmlFor="subject">Your note content:</label>
                    </div>
                    <div className="form__col form__col_75">
                        <div onPaste={handlePaste} ref={noteInput} onInput={onNoteChange} id='edit' contentEditable="true" data-placeholder="Start writing..." className="form__input form__input_textarea"
                        ></div>
                    </div>
                </div>
                <br/>
                    <div className="form__row">
                        <input className="form__btn" type="submit" value="Add note"/>
                    </div>
            </form>
        </div>
    );
}