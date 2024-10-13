// import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import HomeBar from "./components/HomeBar";
import Modal from "./components/Modal";
import DisplaySurah from "./components/DisplaySurah";
import NavBar from "./components/NavBar";
import SettingsModal from "./components/SettingsModal";

function App() {
  const [showSettings, setShowSettings] = useState(false);

  // Main Surah Section
  const [data, setData] = useState([]);
  const [currentSurah, setCurrentSurah] = useState([]);
  const [surahNumber, setSurahNumber] = useState(1);
  const [showTranslation, setShowTranslation] = useState({});
  const [showNote, setShowNote] = useState({});

  const [noteData, setNoteData] = useState({});
  const [savedNote, setSavedNote] = useState({});

  // Notes Modal
  const [noteAyahNumber, setNoteAyahNumber] = useState(0);
  const [editData, setEditData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // Fetch Data From JSON
  async function fetchData() {
    const res = await fetch(`/student-notes/Quran.json`);
    const resData = await res.json();
    setData(resData);
  }

  // On-Load Fetch Data
  useEffect(() => {
    fetchData();
    fetchNotes();
  }, []);

  // When Surah changes you update the page
  useEffect(() => {
    if (data.length > 0) {
      const filteredData = data.filter(
        (x) => x["Surah No"] === `${surahNumber}`,
      );
      setCurrentSurah(filteredData);

      //Setting All Translation -> True
      const initialShowTranslation = filteredData.reduce((acc, ayah) => {
        acc[ayah.id] = true;
        return acc;
      }, {});
      setShowTranslation(initialShowTranslation);

      //Setting All Showing Note  -> True
      const initialShowNote = filteredData.reduce((acc, ayah) => {
        acc[ayah.id] = true;
        return acc;
      }, {});
      setShowNote(initialShowNote);
    }
  }, [surahNumber, data]);

  // Dropdown Surah Number search
  const onSurahChange = (event) => {
    setSurahNumber(event.target.value);
  };

  const onSettingsModalChange = (open) => {
    setShowSettings(open);
  };

  // Toggle Note/Translation Visibilty
  const toggleVisibility = (ayahId, option) => {
    // hide/show translation
    if (option === "translation") {
      setShowTranslation((prevVisible) => ({
        ...prevVisible,
        [ayahId]: !prevVisible[ayahId],
      }));
    }
    // hide/show translation
    else if (option === "note") {
      setShowNote((prevVisible) => ({
        ...prevVisible,
        [ayahId]: !prevVisible[ayahId],
      }));
    }
  };

  // Translation Toggle (ALL)
  const onTranslationChange = (e) => {
    const isChecked = e.target.checked;
    const updatedShowTranslation = currentSurah.reduce((acc, ayah) => {
      acc[ayah.id] = isChecked;
      return acc;
    }, {});
    setShowTranslation(updatedShowTranslation);
  };

  // Note Toggle (ALL)
  const onToggleNoteChange = (e) => {
    const isChecked = e.target.checked;
    const updatedShowNote = currentSurah.reduce((acc, ayah) => {
      acc[ayah.id] = isChecked;
      return acc;
    }, {});
    setShowNote(updatedShowNote);
  };

  // Text Area State
  const handleNoteChange = (e, option) => {
    setNoteData((prev) => ({
      [noteAyahNumber]: { ...prev[noteAyahNumber], [option]: e.target.value },
    }));
  };

  // Utility Functions

  // Function to get notes from local storage
  const getNotesFromLocalStorage = () => {
    return JSON.parse(window.localStorage.getItem("Notes")) || {}; // Return an empty object if null
  };

  // Function to Save Notes to Local storage, SavedNote state
  const syncNotes = (notes) => {
    setSavedNote(notes);
    window.localStorage.setItem("Notes", JSON.stringify(notes));
  };

  // Save to local Storage
  const handleNoteSave = () => {
    const storageNoteData = getNotesFromLocalStorage();
    const combinedData = { ...storageNoteData };

    Object.keys(noteData).forEach((key) => {
      combinedData[key] = storageNoteData[key]
        ? [].concat(storageNoteData[key], noteData[key])
        : [noteData[key]];
    });

    syncNotes(combinedData);
    setIsOpen(false);
  };

  // Display the Saved Notes
  const fetchNotes = () => {
    const latestNoteData = getNotesFromLocalStorage();
    setSavedNote(latestNoteData);
  };

  // Open Note add/

  const handleAddNote = (ayahId) => {
    setNoteAyahNumber(ayahId);
    setIsOpen(true);
  };

  // Delete Note Button Functions
  const handleDeleteNote = (ayahId, indexOfDeletion) => {
    const updatedNotes = { ...savedNote };

    updatedNotes[ayahId].splice(indexOfDeletion, 1);

    syncNotes(updatedNotes);
  };

  const handleEditNote = (ayahId) => {
    setNoteAyahNumber(ayahId);
    setIsOpen(true);
  };

  return (
    <>
      <div className="flex flex-col">
        {/* NavBar */}
        <NavBar
          surahNumber={surahNumber}
          onSurahChange={onSurahChange}
          setShowSettings={onSettingsModalChange}
        ></NavBar>

        {/* Main Surah Loading screen  */}
        <DisplaySurah
          currentSurah={currentSurah}
          showTranslation={showTranslation}
          showNote={showNote}
          savedNote={savedNote}
          toggleVisibility={toggleVisibility}
          handleDeleteNote={handleDeleteNote}
          handleAddNote={handleAddNote}
          handleEditNote={handleEditNote}
        ></DisplaySurah>
      </div>
      {/* Settings Modal */}
      <SettingsModal
        showSettings={showSettings}
        currentSurah={currentSurah}
        showTranslation={showTranslation}
        showNote={showNote}
        setShowSettings={onSettingsModalChange}
        onTranslationChange={onTranslationChange}
        onToggleNoteChange={onToggleNoteChange}
      ></SettingsModal>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleNoteSave}
        onNoteChange={handleNoteChange}
        editNoteData={editData}
      ></Modal>
      <HomeBar></HomeBar>
    </>
  );
}

export default App;
