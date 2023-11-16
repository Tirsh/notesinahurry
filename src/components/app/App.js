import {Form} from "../form/Form";
import {NotesList} from "../notesList/NotesList";

import './app.scss';

function App() {
  return (
    <div className="App center">
      <Form/>
      <NotesList/>
    </div>
  );
}

export default App;
