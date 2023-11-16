import {useSelector} from "react-redux";
import {notesSelector} from "./notesSlice";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import parse from   'html-react-parser';
import {delNote} from "./notesSlice";
import {useDispatch} from "react-redux";

import './notesList.scss';

export const NotesList = () => {
    const dispatch = useDispatch();
    const notes = useSelector(notesSelector.selectAll).reverse();

    const renderNotes = () => (
        notes.map(item => {
            return (
                <article key={item.id} className="notesList__note">
                    <span className="notesList__date">{item.date}</span>
                    <h2 className="notesList__title">{item.title}</h2>
                    <div className="notesList__text">{parse(item.data)}</div>
                    <button onClick={() => {dispatch(delNote(item.id))}} className="notesList__close">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 50 50">
                        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                    </svg>
                    </button>
                </article>
            )
        })
    )
    return (
        <div className='notesList center'>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry>
                    {renderNotes()}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}