import React, { useState, useEffect } from "react";
import './DisplaySurah.css';
import { PiNoteLight } from "react-icons/pi";
import { MdNoteAdd } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";


export default function DisplaySurah({
  currentSurah,
  showTranslation,
  showNote,
  savedNote,
  toggleVisibility,
  handleDeleteNote,
  handleAddNote,
  handleEditNote,
}) {

  return (
    <>
      <div className="container-surah flex h-auto min-h-screen w-full items-center justify-center bg-white py-6 text-greybg">
        {currentSurah ? (
          <div className="flex w-[95%] flex-col items-center gap-4 mt-10">
            {/* Creates Card For Each Ayah  */}
            {currentSurah.map((ayah) => (
              <div
                key={ayah.id}
                className="container-per-surah flex w-full flex-col overflow-hidden"
              >
                <div className="surah-panel section-color">
                  <p className="ayah-no ms-4">{ayah["Surah No"]} : {ayah["Ayah No"]}</p>
                  <button
                        className="add-notes mouse-over ms-5 mb-2.5"
                        onClick={() => handleAddNote(ayah.id, false)}
                  >
                    <MdNoteAdd className="icon" size={22} />
                  </button>
                </div>
                {/* Ayah Div */}
                <div
                  className="font-ayah ml-[5%] p-4 text-right font-semibold leading-[3.2rem] md:p-8 md:text-xl md:leading-[4rem] lg:text-3xl lg:leading-[4.5rem]"
                  style={{ wordSpacing: "0.3rem" }}
                >
                  {ayah["Ayah Text"]}
                </div>
                {/* Translation Div */}
                {showTranslation[ayah.id] ? (
                  <div className="translation flex flex-col gap-4 p-4">
                    <div className="font-semibold ps-4 pe-4 md:text-xl md:font-medium">
                      {ayah["Saheeh International Translation"]}
                    </div>
                  </div>
                ) : (
                  <div className="p-4">

                  </div>
                )}
                {/* Note Div */}
                {showNote[ayah.id] ? (
                  <div className="container-notes flex h-auto flex-col gap-4 p-4">
                    <div
                      className="display-toggle"
                      onClick={() => toggleVisibility(ayah.id, "note")}
                    >
                      <h3 className="toggle-text">Notes</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="8 0 24 24"
                        className="translation-caret rotate-90"
                      >
                        <path
                          d="M15 18 l6 -6 l-6 -6"
                          stroke="black"
                          fill="none"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    {/* Saved Note Div */}
                    <div className="flex w-full flex-wrap gap-2 rounded-md">
                      {savedNote[ayah.id]?.length > 0 &&
                        savedNote[ayah.id].map((note, index) => (
                          <div
                            className="container-saved-note section-color flex w-full flex-col justify-between gap-4 p-4 md:w-1/4"
                            key={`${ayah.id}-${index}`}
                          >
                            <div className="flex flex-col gap-4">
                              <h3 className="text-xl font-semibold">
                                {note.title}
                              </h3>
                              <p className="text-xs">{note.description}</p>
                            </div>
                            <div className="flex justify-end gap-4">
                              <button
                                className="mouse-over"
                                // onClick={() =>
                                //   handleEditNote(ayah.id, true, index)
                                // }
                              >
                                <MdEditDocument className="icon" size={20} />
                              </button>
                              <button
                                className="mouse-over"
                                onClick={() => handleDeleteNote(ayah.id, index)}
                              >
                                <MdDeleteForever className="icon danger" size={22} />
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>

                  </div>
                ) : (
                  <div className="container-notes p-4">
                    <div
                      onClick={() => toggleVisibility(ayah.id, "note")}
                      className="display-toggle"
                    >
                      <h3 className="toggle-text">Notes</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="8 0 24 24"
                        className="translation-caret -rotate-90"
                      >
                        <path
                          d="M15 18 l6 -6 l-6 -6"
                          stroke="black"
                          fill="none"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
