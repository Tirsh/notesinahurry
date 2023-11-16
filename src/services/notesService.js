import {addNotes} from "../components/notesList/notesSlice";
import {useDispatch} from "react-redux";
import {useHttp} from "../hooks/http.hook";

export const NotesService = () => {
    const {request, error} = useHttp();
    const dispatch = useDispatch();
    const getNotes = (data) => {
        if(data) {
            dispatch(addNotes(data));
        }
    }
    const fetchNotes = async (link) => {
        const res = await request(link);
        dispatch((addNotes(res)))
    }
    return {getNotes, fetchNotes};
}