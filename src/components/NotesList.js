import AddNote from "./AddNote";
import Note from "./Note";
// eslint-disable-next-line react/prop-types

const NotesList = ({ notes , handleAddNote , handleDelete}) => {
    return (
      <div className="grid gap-4 grid-cols-auto-fill grid-cols-minmax-250">
       {notes.map((note) => (
  <Note 
    key={note.id} 
    id={note.id} 
    text={note.text}
    date={note.date} 
    handleDelete={handleDelete}
  />
))}

        <AddNote
         handleAddNote={handleAddNote}
         />
      </div>
    );
  };
  
  export default NotesList;
  