import React, { useState } from 'react';
import Home from './components/home';
import AddNote from './components/addNote';
import EditNote from './components/editNote';

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  deleteNote,
  currentNote,
  setCurrentNote,
  editNote,
}) => {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} deleteNote={deleteNote} setCurrentNote={setCurrentNote} />;
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} currentNote={currentNote} editNote={editNote} />;
    default:
      return <Home />;
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);

  const [currentNote, setCurrentNote] = useState(null);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    setNoteList([
      ...noteList,
      {
        id,
        title,
        desc,
      },
    ]);
  }

  const deleteNote = (id) => {
    setNoteList(noteList.filter(note => note.id !== id));
  }

  const editNote = (id, title, desc) => {
    setNoteList(noteList.map(note => (note.id === id ? { id, title, desc } : note)));
  }

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
      deleteNote={deleteNote}
      currentNote={currentNote}
      setCurrentNote={setCurrentNote}
      editNote={editNote}
    />
  );
};

export default App;
