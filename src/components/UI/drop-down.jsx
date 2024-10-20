import { IoMdArrowDropdown } from "react-icons/io";
import './drop-down.css';
import { useState, useEffect, useRef } from 'react';

export default function DropDown({surahs, surahNumber, handleSurahChange}) {

  const [open, setOpen] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);

  const [surahData, setSurahData] = useState({}); 
  const myRef = useRef();

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = (surahName, surahNo) => {
    handleSurahChange(surahNo);
    setSurahData(prevState => {
      return {
        ...prevState,
        name: surahName,
        no: surahNo
      }
    });
    setOpen(false);
  }

  const handleClickOutside = e => {
      if (!myRef.current.contains(e.target)) {
          setClickedOutside(true);
          setOpen(false)
      }
  };

  const handleClickInside = () => setClickedOutside(false);

  useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  //console.log(surahData);


  return (
    <>
        <div className="container-drop-down">
          <div className='default-select' onClick={handleOpen}>
            {
              Object.keys(surahData).length === 0 && <p className='default-text'>1 - Al-Fatiha</p>
            }
            {
              Object.keys(surahData).length > 0 && (
                <p className='default-text'>
                  {surahData.no} - {surahData.name}
                </p>
              )
            }
            <IoMdArrowDropdown className='drop-down-icon' />
          </div>

          {
            open && (
              <div className='drop-down-items' 
                   ref={myRef} 
                   onClick={handleClickInside}>
                <ul className='list-items'>
                  {surahs.map((surah) => {
                    return (
                      <li key={surah.name} 
                          className='list-item' 
                          value={surah.surahNumber}
                          onChange={handleSurahChange}
                          onClick={() => {handleClose(surah.name, surah.surahNumber)}}>
                            
                            {surah.surahNumber} - {surah.name}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          }          
        </div>
    </>
  )
}