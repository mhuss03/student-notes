import { IoMdHome } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import './HomeBar.css';


export default function HomeBar() {

  const [selected, setSelected] = useState(false);

  const toggleSelect = () => {
    setSelected(true);
  }

  let cssClasses = "icon home-bar"

  if(selected) {
    cssClasses = "icon selected"
  }

  return (
    <div className="home-panel sticky bottom-0 flex h-[8vh] w-full justify-around bg-[#7A7F8F] py-4">
      <div className="home-icon-container">
        <IoIosHome className={cssClasses} size={24} />
      </div>
      <div className="home-icon-container">
        <FaBookmark className={cssClasses} size={20} />
      </div>
      <div className="home-icon-container">
        <FaUser className={cssClasses} size={20} />
      </div>
    </div>
  );
}
