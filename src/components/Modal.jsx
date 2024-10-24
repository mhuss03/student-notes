import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactDom from "react-dom";

export default function ({
  //open,
  children,
  onClose,
  onSave,
  onNoteChange,
  editNoteData,
}) {
  // if (!open) return null;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //   useEffect(() => {
  //     if (editNoteData) {
  //       setTitle(editNoteData.title);
  //       setDescription(editNoteData.description);
  //     }
  //   }, [editNoteData]);

  return ReactDom.createPortal(
    <>
      <motion.div 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="portal fixed right-0 top-0 z-[1000] flex h-full w-full items-center justify-center backdrop-blur-md bg-slate-800">
        <div className="h-3/5 w-3/4 rounded-md bg-[#F2F2F2] px-6 py-4 md:w-3/5 lg:h-3/5 lg:w-2/5 xl:h-1/2">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">
              Add a new Note
            </h1>
            <button onClick={onClose} className="">
              Close
            </button>
          </div>
          <hr />
          <div className="mt-2 flex h-4/5 flex-col items-center justify-around">
            <div className="flex w-full flex-col mt-3 md:w-4/5">
              <label htmlFor="title" className="text-md">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title-input"
                className="mt-2 py-1 pl-2 md:py-2"
                onChange={(e) => onNoteChange(e, "title")}
              />
            </div>
            <div className="flex w-full flex-col mt-3 md:w-4/5">
              <label htmlFor="description text-md">Description</label>
              <textarea
                name="description"
                id=""
                className="h-40 mt-2 py-1 pl-2 md:py-2"
                onChange={(e) => onNoteChange(e, "description")}
              ></textarea>
            </div>
            <button
              className="w-3/5 mt-4 rounded-md bg-primary py-2 text-greybg md:w-1/2"
              onClick={onSave}
            >
              Add Note
            </button>
          </div>
        </div>
        {children}
      </motion.div>
      {/* </div> */}
    </>,
    document.getElementById("portal"),
  );
}
