import React, { useState, useEffect } from "react";

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
      <div className="flex h-auto min-h-screen w-full items-center justify-center bg-greybg py-6 text-greybg">
        {currentSurah ? (
          <div className="flex w-[95%] flex-col items-center gap-4">
            {/* Creates Card For Each Ayah  */}
            {currentSurah.map((ayah) => (
              <div
                key={ayah.id}
                className="flex w-full flex-col overflow-hidden rounded-xl bg-primary text-greybg"
              >
                {/* Ayah Div */}
                <div
                  className="font-ayah ml-[5%] p-4 text-right font-semibold leading-[3.2rem] md:p-8 md:text-xl md:leading-[4rem] lg:text-3xl lg:leading-[4.5rem]"
                  style={{ wordSpacing: "0.3rem" }}
                >
                  {ayah["Ayah Text"]}
                </div>
                {/* Translation Div */}
                {showTranslation[ayah.id] ? (
                  <div className="flex flex-col gap-4 p-4">
                    <div
                      className="display-toggle"
                      onClick={() => toggleVisibility(ayah.id, "translation")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="4 0 24 24"
                        className="translation-caret rotate-90"
                      >
                        <path
                          d="M15 18 l6 -6 l-6 -6"
                          stroke="#eef2f5"
                          fill="none"
                          strokeWidth="2"
                        />
                      </svg>
                      <h3 className="toggle-text">Translation</h3>
                    </div>
                    <div className="font-semibold md:text-2xl md:font-medium">
                      {ayah["Saheeh International Translation"]}
                    </div>
                  </div>
                ) : (
                  <div className="p-4">
                    <div
                      onClick={() => toggleVisibility(ayah.id, "translation")}
                      className="display-toggle"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="8 0 24 24"
                        className="translation-caret -rotate-90"
                      >
                        <path
                          d="M15 18 l6 -6 l-6 -6"
                          stroke="white"
                          fill="none"
                          strokeWidth="2"
                        />
                      </svg>
                      <h3 className="toggle-text">Translation</h3>
                    </div>
                  </div>
                )}
                {/* Note Div */}
                {showNote[ayah.id] ? (
                  <div className="flex h-auto flex-col gap-4 bg-[#2d425f] p-4">
                    <div
                      className="display-toggle"
                      onClick={() => toggleVisibility(ayah.id, "note")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="8 0 24 24"
                        className="translation-caret rotate-90"
                      >
                        <path
                          d="M15 18 l6 -6 l-6 -6"
                          stroke="white"
                          fill="none"
                          strokeWidth="2"
                        />
                      </svg>
                      <h3 className="toggle-text">Notes</h3>
                    </div>
                    {/* Saved Note Div */}
                    <div className="flex w-full flex-wrap gap-2 rounded-md">
                      {savedNote[ayah.id]?.length > 0 &&
                        savedNote[ayah.id].map((note, index) => (
                          <div
                            className="flex w-full flex-col justify-between gap-4 rounded-md bg-[#41556e] p-4 md:w-1/4"
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
                                className="notes-button bg-[#3599d6]"
                                // onClick={() =>
                                //   handleEditNote(ayah.id, true, index)
                                // }
                              >
                                Edit
                              </button>
                              <button
                                className="notes-button bg-[#e84b42]"
                                onClick={() => handleDeleteNote(ayah.id, index)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="w- flex justify-end">
                      <button
                        className="h-12 w-12 rounded-full bg-secondary px-2 py-1 text-greybg"
                        onClick={() => handleAddNote(ayah.id, false)}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M6 12H18M12 6V18"
                              stroke="#FFF"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#2d425f] p-4">
                    <div
                      onClick={() => toggleVisibility(ayah.id, "note")}
                      className="display-toggle"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="8 0 24 24"
                        className="translation-caret -rotate-90"
                      >
                        <path
                          d="M15 18 l6 -6 l-6 -6"
                          stroke="white"
                          fill="none"
                          strokeWidth="2"
                        />
                      </svg>
                      <h3 className="toggle-text">Notes</h3>
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
