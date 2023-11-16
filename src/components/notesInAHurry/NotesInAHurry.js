import {Form} from "../form/Form";
import {NotesList} from "../notesList/NotesList";
import {Provider} from "react-redux";

import './notesinahurry.scss';
import {store} from "../../store/store";

function NotesInAHurry() {
  return (
      <Provider store={store}>
        <div className="App center">
          <Form/>
          <NotesList/>
        </div>
      </Provider>
  );
}

export default NotesInAHurry;
