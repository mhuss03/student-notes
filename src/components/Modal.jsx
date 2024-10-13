import { useState, useEffect } from "react";
import ReactDom from "react-dom";

export default function Modal({
  open,
  children,
  onClose,
  onSave,
  onNoteChange,
  editNoteData,
}) {
  if (!open) return null;

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
      <div className="fixed right-0 top-0 z-[1000] flex h-full w-full items-center justify-center backdrop-blur-sm">
        <div className="h-3/5 w-3/4 rounded-md border-2 border-accent bg-greybg px-6 py-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold text-accent">
              Add a new Note
            </h1>
            <button onClick={onClose} className="">
              Close
            </button>
          </div>
          <hr />
          <div className="mt-2 flex flex-col justify-around gap-4">
            <div className="flex flex-col">
              <label htmlFor="title" className="text-lg">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title-input"
                className="rounded-lg border-2 border-accent pl-2"
                onChange={(e) => onNoteChange(e, "title")}
              />
            </div>
            <div className="flex flex-col text-lg">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id=""
                className="h-40 rounded-lg border-2 border-accent pl-2"
                onChange={(e) => onNoteChange(e, "description")}
              ></textarea>
            </div>
            <button
              className="rounded-md bg-primary py-2 text-greybg"
              onClick={onSave}
            >
              Add Note
            </button>
          </div>
        </div>
        {children}
      </div>
      {/* </div> */}
    </>,
    document.getElementById("portal"),
  );
}
