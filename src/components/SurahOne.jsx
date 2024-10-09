import React, { useState, useEffect } from "react";
import { ParsedData } from "./ParsedData";

export default function SurahOne({ surahNumber }) {
  const [data, setData] = useState([]);
  const [currentSurah, setCurrentSurah] = useState([]);
  const [showTranslation, setShowTranslation] = useState({});
  const [showNote, setShowNote] = useState({});

  async function fetchData() {
    const res = await fetch(`/Quran.json`);
    const resData = await res.json();
    setData(resData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const filteredData = data.filter(
        (x) => x["Surah No"] === `${surahNumber}`,
      );
      setCurrentSurah(filteredData);
    }
  }, [surahNumber, data]);

  const toggleVisibility = (ayahId, hideOption) => {
    if (hideOption === "translation") {
      setShowTranslation((prevVisible) => ({
        ...prevVisible,
        [ayahId]: !prevVisible[ayahId],
      }));
    } else {
      setShowNote((prevVisible) => ({
        ...prevVisible,
        [ayahId]: !prevVisible[ayahId],
      }));
    }
  };

  return (
    <div className="flex h-auto min-h-screen w-full items-center justify-center bg-black py-6 text-white">
      {currentSurah ? (
        <div className="flex w-4/5 flex-col items-center gap-4">
          {currentSurah.map((ayah) => (
            <div
              key={ayah.id}
              className="flex h-[30vh] w-full flex-col justify-around rounded-xl bg-[#303030] px-4 py-6"
            >
              <div className="ml-[5%] text-xl">{ayah["Ayah Text"]}</div>
              {!showTranslation[ayah.id] ? (
                <div
                  onClick={() => toggleVisibility(ayah.id, "translation")}
                  className="flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-[8%] rotate-180"
                  >
                    <path
                      d="M15 18l-6-6 6-6"
                      stroke="white"
                      fill="none"
                      strokeWidth="2"
                    />
                  </svg>
                  <div>{ayah["Saheeh International Translation"]}</div>
                </div>
              ) : (
                <div onClick={() => toggleVisibility(ayah.id, "translation")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-[8%] -rotate-90"
                  >
                    <path
                      d="M15 18l-6-6 6-6"
                      stroke="white"
                      fill="none"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              )}
              {!showNote[ayah.id] ? (
                <div className="flex h-1/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-[10%]"
                    onClick={() => toggleVisibility(ayah.id, "note")}
                  >
                    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"></path>
                  </svg>
                  <textarea
                    name=""
                    id=""
                    className="ml-4 h-full w-4/5 resize-none bg-inherit pl-2 text-white"
                    placeholder="Take a note..."
                  ></textarea>
                </div>
              ) : (
                <div className="flex h-1/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                    fill="#4fa6af"
                    className="w-[10%]"
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
  );
}
