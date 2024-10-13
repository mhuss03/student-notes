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
          <div className="flex w-4/5 flex-col items-center gap-4">
            {/* Creates Card For Each Ayah  */}
            {currentSurah.map((ayah) => (
              <div
                key={ayah.id}
                className="flex w-full flex-col gap-4 rounded-xl bg-primary px-4 py-6 text-greybg"
              >
                {/* Ayah Div */}
                <div className="ml-[5%] leading-[3.2rem] md:text-xl">
                  {ayah["Ayah Text"]}
                </div>
                {/* Translation Div */}
                {showTranslation[ayah.id] ? (
                  <div
                    onClick={() => toggleVisibility(ayah.id, "translation")}
                    className="flex flex-col"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-[8%] md:w-[4%]"
                    >
                      <path
                        d="M15 18 l6 -6 l-6 -6"
                        stroke="#eef2f5"
                        fill="none"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="pl-6 md:text-2xl">
                      {ayah["Saheeh International Translation"]}
                    </div>
                  </div>
                ) : (
                  <div onClick={() => toggleVisibility(ayah.id, "translation")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-[8%] rotate-90 md:w-[4%]"
                    >
                      <path
                        d="M15 18 l6 -6 l-6 -6"
                        stroke="white"
                        fill="none"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                )}
                {/* Note Div */}
                {showNote[ayah.id] ? (
                  <div className="flex h-auto flex-col items-center gap-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 24 24"
                        fill="#eef2f5"
                        className="w-[10%] md:w-[12%]"
                        onClick={() => toggleVisibility(ayah.id, "note")}
                      >
                        <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"></path>
                      </svg>
                    </div>
                    {/* Saved Note Div */}
                    <div className="flex w-full flex-col justify-around gap-2 rounded-md px-2 py-4">
                      {savedNote[ayah.id]?.length > 0 &&
                        savedNote[ayah.id].map((note, index) => (
                          <div
                            className="flex flex-col gap-2 rounded-md bg-greybg px-4 py-2 text-primary"
                            key={`${ayah.id}-${index}`}
                          >
                            <h3 className="text-2xl font-semibold">
                              {note.title}
                            </h3>
                            <p>{note.description}</p>
                            <div className="flex justify-center gap-4">
                              <button
                                className="rounded-md bg-secondary px-2 py-1 text-greybg"
                                // onClick={() =>
                                //   handleEditNote(ayah.id, true, index)
                                // }
                              >
                                Edit
                              </button>
                              <button
                                className="bg rounded-md bg-red-500 px-2 py-1 text-greybg"
                                onClick={() => handleDeleteNote(ayah.id, index)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="flex w-4/5 flex-col justify-center gap-2">
                      <button
                        className="rounded-md bg-secondary px-2 py-1 text-greybg"
                        onClick={() => handleAddNote(ayah.id, false)}
                      >
                        Add Note
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-1/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      fill="#4fa6af"
                      className="w-[10%] md:w-[4%]"
                      onClick={() => toggleVisibility(ayah.id, "note")}
                    >
                      <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"></path>
                    </svg>
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
