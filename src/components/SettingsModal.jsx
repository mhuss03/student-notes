export default function SettingsModal({
  showSettings,
  currentSurah,
  showTranslation,
  showNote,
  setShowSettings,
  onTranslationChange,
  onToggleNoteChange,
}) {
  return (
    <>
      <div
        className={`fixed right-0 top-0 flex h-full w-full transform items-center justify-center p-4 text-xl backdrop-blur-sm transition-transform duration-700 ${
          showSettings ? "translate-x-0" : "translate-x-full"
        } flex flex-col gap-4`}
      >
        <div className="flex h-60 w-3/4 max-w-96 flex-col justify-between rounded-md bg-[#f2f2f2] p-4">
          <div className="flex justify-between">
            <h3 className="whitespace-nowrap text-2xl font-bold tracking-tight">
              Settings
            </h3>
            <button onClick={() => setShowSettings(false)} className="h-4 w-4">
              <svg
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
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
                    d="M3 21.32L21 3.32001"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M3 3.32001L21 21.32"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-8">
            <label className="flex cursor-pointer items-center justify-between gap-4">
              <h4 className="text-sm font-medium">Translation</h4>
              <input
                type="checkbox"
                value=""
                className="peer sr-only"
                id="translation-checkbox"
                onChange={(e) => onTranslationChange(e)}
                checked={
                  currentSurah.length > 0 &&
                  Object.values(showTranslation).every((val) => val === true)
                }
              />
              <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full"></div>
            </label>
            <label className="flex cursor-pointer items-center justify-between gap-4">
              <h4 className="text-sm font-medium">Notes</h4>
              <input
                type="checkbox"
                value=""
                className="peer sr-only"
                id="note-checkbox"
                onChange={(e) => onToggleNoteChange(e)}
                checked={
                  currentSurah.length > 0 &&
                  Object.values(showNote).every((val) => val === true)
                }
              />
              <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full"></div>
            </label>
          </div>
          <h1 className="text-sm italic text-black/70">
            Feature still in development!
          </h1>
        </div>
      </div>
    </>
  );
}
