// import { data } from "autoprefixer";
import React, { useState } from "react";
import SurahOne from "./components/SurahOne";
import HomeBar from "./components/HomeBar";
import NavBar from "./components/NavBar";

function App() {
  const [surahNumber, setSurahNumber] = useState(1);

  return (
    <div className="">
      <div className="flex flex-col">
        <NavBar setSurahNumber={setSurahNumber} />
        <SurahOne surahNumber={surahNumber} />
      </div>
      <HomeBar></HomeBar>
    </div>
  );
}

export default App;
