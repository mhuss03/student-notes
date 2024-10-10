import { useState } from "react";

const surahs = [
  { surahNumber: 1, name: "Al-Fatiha" },
  { surahNumber: 2, name: "Al-Baqarah" },
  { surahNumber: 3, name: "Aal-E-Imran" },
  { surahNumber: 4, name: "An-Nisa" },
  { surahNumber: 5, name: "Al-Ma'idah" },
  { surahNumber: 6, name: "Al-An'am" },
  { surahNumber: 7, name: "Al-A'raf" },
  { surahNumber: 8, name: "Al-Anfal" },
  { surahNumber: 9, name: "At-Tawbah" },
  { surahNumber: 10, name: "Yunus" },
  { surahNumber: 11, name: "Hud" },
  { surahNumber: 12, name: "Yusuf" },
  { surahNumber: 13, name: "Ar-Ra'd" },
  { surahNumber: 14, name: "Ibrahim" },
  { surahNumber: 15, name: "Al-Hijr" },
  { surahNumber: 16, name: "An-Nahl" },
  { surahNumber: 17, name: "Al-Isra" },
  { surahNumber: 18, name: "Al-Kahf" },
  { surahNumber: 19, name: "Maryam" },
  { surahNumber: 20, name: "Ta-Ha" },
  { surahNumber: 21, name: "Al-Anbiya" },
  { surahNumber: 22, name: "Al-Hajj" },
  { surahNumber: 23, name: "Al-Mu'minun" },
  { surahNumber: 24, name: "An-Nur" },
  { surahNumber: 25, name: "Al-Furqan" },
  { surahNumber: 26, name: "Ash-Shu'ara" },
  { surahNumber: 27, name: "An-Naml" },
  { surahNumber: 28, name: "Al-Qasas" },
  { surahNumber: 29, name: "Al-Ankabut" },
  { surahNumber: 30, name: "Ar-Rum" },
  { surahNumber: 31, name: "Luqman" },
  { surahNumber: 32, name: "As-Sajda" },
  { surahNumber: 33, name: "Al-Ahzab" },
  { surahNumber: 34, name: "Saba" },
  { surahNumber: 35, name: "Fatir" },
  { surahNumber: 36, name: "Ya-Sin" },
  { surahNumber: 37, name: "As-Saffat" },
  { surahNumber: 38, name: "Sad" },
  { surahNumber: 39, name: "Az-Zumar" },
  { surahNumber: 40, name: "Ghafir" },
  { surahNumber: 41, name: "Fussilat" },
  { surahNumber: 42, name: "Ash-Shura" },
  { surahNumber: 43, name: "Az-Zukhruf" },
  { surahNumber: 44, name: "Ad-Dukhan" },
  { surahNumber: 45, name: "Al-Jathiya" },
  { surahNumber: 46, name: "Al-Ahqaf" },
  { surahNumber: 47, name: "Muhammad" },
  { surahNumber: 48, name: "Al-Fath" },
  { surahNumber: 49, name: "Al-Hujurat" },
  { surahNumber: 50, name: "Qaf" },
  { surahNumber: 51, name: "Adh-Dhariyat" },
  { surahNumber: 52, name: "At-Tur" },
  { surahNumber: 53, name: "An-Najm" },
  { surahNumber: 54, name: "Al-Qamar" },
  { surahNumber: 55, name: "Ar-Rahman" },
  { surahNumber: 56, name: "Al-Waqi'a" },
  { surahNumber: 57, name: "Al-Hadid" },
  { surahNumber: 58, name: "Al-Mujadila" },
  { surahNumber: 59, name: "Al-Hashr" },
  { surahNumber: 60, name: "Al-Mumtahina" },
  { surahNumber: 61, name: "As-Saff" },
  { surahNumber: 62, name: "Al-Jumua" },
  { surahNumber: 63, name: "Al-Munafiqun" },
  { surahNumber: 64, name: "At-Taghabun" },
  { surahNumber: 65, name: "At-Talaq" },
  { surahNumber: 66, name: "At-Tahrim" },
  { surahNumber: 67, name: "Al-Mulk" },
  { surahNumber: 68, name: "Al-Qalam" },
  { surahNumber: 69, name: "Al-Haqqah" },
  { surahNumber: 70, name: "Al-Ma'arij" },
  { surahNumber: 71, name: "Nuh" },
  { surahNumber: 72, name: "Al-Jinn" },
  { surahNumber: 73, name: "Al-Muzzammil" },
  { surahNumber: 74, name: "Al-Muddathir" },
  { surahNumber: 75, name: "Al-Qiyamah" },
  { surahNumber: 76, name: "Al-Insan" },
  { surahNumber: 77, name: "Al-Mursalat" },
  { surahNumber: 78, name: "An-Naba" },
  { surahNumber: 79, name: "An-Nazi'at" },
  { surahNumber: 80, name: "Abasa" },
  { surahNumber: 81, name: "At-Takwir" },
  { surahNumber: 82, name: "Al-Infitar" },
  { surahNumber: 83, name: "Al-Mutaffifin" },
  { surahNumber: 84, name: "Al-Inshiqaq" },
  { surahNumber: 85, name: "Al-Buruj" },
  { surahNumber: 86, name: "At-Tariq" },
  { surahNumber: 87, name: "Al-Ala" },
  { surahNumber: 88, name: "Al-Ghashiya" },
  { surahNumber: 89, name: "Al-Fajr" },
  { surahNumber: 90, name: "Al-Balad" },
  { surahNumber: 91, name: "Ash-Shams" },
  { surahNumber: 92, name: "Al-Lail" },
  { surahNumber: 93, name: "Ad-Duha" },
  { surahNumber: 94, name: "Ash-Sharh" },
  { surahNumber: 95, name: "At-Tin" },
  { surahNumber: 96, name: "Al-Alaq" },
  { surahNumber: 97, name: "Al-Qadr" },
  { surahNumber: 98, name: "Al-Bayyina" },
  { surahNumber: 99, name: "Az-Zalzala" },
  { surahNumber: 100, name: "Al-Adiyat" },
  { surahNumber: 101, name: "Al-Qaria" },
  { surahNumber: 102, name: "At-Takathur" },
  { surahNumber: 103, name: "Al-Asr" },
  { surahNumber: 104, name: "Al-Humaza" },
  { surahNumber: 105, name: "Al-Fil" },
  { surahNumber: 106, name: "Quraish" },
  { surahNumber: 107, name: "Al-Ma'un" },
  { surahNumber: 108, name: "Al-Kawthar" },
  { surahNumber: 109, name: "Al-Kafirun" },
  { surahNumber: 110, name: "An-Nasr" },
  { surahNumber: 111, name: "Al-Masad" },
  { surahNumber: 112, name: "Al-Ikhlas" },
  { surahNumber: 113, name: "Al-Falaq" },
  { surahNumber: 114, name: "An-Nas" },
];

export default function NavBar({
  setSurahNumber,
  setShowAllTranslation,
  setShowAllNote,
}) {
  const [value, setValue] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  const onSearchChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    if (searchTerm === "") {
      alert("Please enter a search!");
    } else {
      setSurahNumber(searchTerm);
    }
  };

  const onTranslationChange = (e) => {
    if (e.target.checked) {
      setShowAllTranslation(true);
    } else {
      setShowAllTranslation(false);
    }
  };

  return (
    <div className="sticky top-0 flex h-[8vh] w-full items-center justify-between border-b-2 border-white bg-[#303030]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-[10%]"
      >
        <path d="M15 18l-6-6 6-6" stroke="white" fill="none" strokeWidth="2" />
      </svg>
      <div className="flex w-1/3 items-center justify-between">
        <input
          className="hidden h-fit w-1/2 bg-inherit pl-4 text-white sm:block"
          type="text"
          placeholder="Surah Al-Fatiha"
          name="name"
        />
        <select
          name="number"
          id=""
          className="bg-inherit text-white"
          value={value}
          onChange={onSearchChange}
        >
          {surahs.map((surah) => (
            <option
              key={surah.surahNumber}
              value={surah.surahNumber}
              className="bg-[#303030]"
            >
              {surah.surahNumber} - {surah.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex w-1/4 justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="white"
          className="w-[35%]"
          onClick={() => setShowSettings(!showSettings)}
        >
          <path d="M 10.490234 2 C 10.011234 2 9.6017656 2.3385938 9.5097656 2.8085938 L 9.1757812 4.5234375 C 8.3550224 4.8338012 7.5961042 5.2674041 6.9296875 5.8144531 L 5.2851562 5.2480469 C 4.8321563 5.0920469 4.33375 5.2793594 4.09375 5.6933594 L 2.5859375 8.3066406 C 2.3469375 8.7216406 2.4339219 9.2485 2.7949219 9.5625 L 4.1132812 10.708984 C 4.0447181 11.130337 4 11.559284 4 12 C 4 12.440716 4.0447181 12.869663 4.1132812 13.291016 L 2.7949219 14.4375 C 2.4339219 14.7515 2.3469375 15.278359 2.5859375 15.693359 L 4.09375 18.306641 C 4.33275 18.721641 4.8321562 18.908906 5.2851562 18.753906 L 6.9296875 18.1875 C 7.5958842 18.734206 8.3553934 19.166339 9.1757812 19.476562 L 9.5097656 21.191406 C 9.6017656 21.661406 10.011234 22 10.490234 22 L 13.509766 22 C 13.988766 22 14.398234 21.661406 14.490234 21.191406 L 14.824219 19.476562 C 15.644978 19.166199 16.403896 18.732596 17.070312 18.185547 L 18.714844 18.751953 C 19.167844 18.907953 19.66625 18.721641 19.90625 18.306641 L 21.414062 15.691406 C 21.653063 15.276406 21.566078 14.7515 21.205078 14.4375 L 19.886719 13.291016 C 19.955282 12.869663 20 12.440716 20 12 C 20 11.559284 19.955282 11.130337 19.886719 10.708984 L 21.205078 9.5625 C 21.566078 9.2485 21.653063 8.7216406 21.414062 8.3066406 L 19.90625 5.6933594 C 19.66725 5.2783594 19.167844 5.0910937 18.714844 5.2460938 L 17.070312 5.8125 C 16.404116 5.2657937 15.644607 4.8336609 14.824219 4.5234375 L 14.490234 2.8085938 C 14.398234 2.3385937 13.988766 2 13.509766 2 L 10.490234 2 z M 12 8 C 14.209 8 16 9.791 16 12 C 16 14.209 14.209 16 12 16 C 9.791 16 8 14.209 8 12 C 8 9.791 9.791 8 12 8 z"></path>
        </svg>
        <button className="w-8" onClick={() => onSearch(value)}>
          <svg
            fill="#FFFFFF"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 488.4 488.4"
            xmlSpace="preserve"
            className="w-[70%]"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
      </div>
      <div
        className={`fixed right-0 top-0 h-full w-full transform bg-[#303030] p-4 text-white transition-transform duration-700 ${
          showSettings ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={() => setShowSettings(false)}>Close</button>
        <div class="mb-4 flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            onChange={(e) => onTranslationChange(e)}
          />
          <label
            for="default-checkbox"
            class="text-white0 ms-2 text-sm font-medium"
          >
            Translation
          </label>
        </div>
        <div class="mb-4 flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <label
            for="default-checkbox"
            class="text-white0 ms-2 text-sm font-medium"
          >
            Notes
          </label>
        </div>
        <h1>Feature still in development!</h1>
      </div>
    </div>
  );
}
