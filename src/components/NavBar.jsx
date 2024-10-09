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

export default function NavBar({ setSurahNumber }) {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    if (searchTerm === "") {
      alert("Please enter a search!");
    } else {
      setSurahNumber(searchTerm);
    }
  };

  return (
    <div className="sticky top-0 flex h-[8vh] w-full justify-between border-b-2 border-white bg-[#303030]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="my-auto ml-4 w-12"
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
          onChange={onChange}
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
      <button className="mr-4 w-8" onClick={() => onSearch(value)}>
        <svg
          fill="#FFFFFF"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 488.4 488.4"
          xmlSpace="preserve"
          className=""
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
  );
}
