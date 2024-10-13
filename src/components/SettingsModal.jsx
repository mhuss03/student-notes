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
        className={`fixed right-0 top-0 h-full w-full transform bg-primary p-4 text-xl text-greybg transition-transform duration-700 ${
          showSettings ? "translate-x-0" : "translate-x-full"
        } flex flex-col gap-4`}
      >
        <button onClick={() => setShowSettings(false)} className="">
          Close
        </button>
        <div className="mb-4 flex items-center">
          <input
            id="translation-checkbox"
            type="checkbox"
            value=""
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            onChange={(e) => onTranslationChange(e)}
            checked={
              currentSurah.length > 0 &&
              Object.values(showTranslation).every((val) => val === true)
            }
          />
          <label
            htmlFor="translation-checkbox"
            className="ms-2 text-sm font-medium text-greybg"
          >
            Translation
          </label>
        </div>
        <div className="mb-4 flex items-center">
          <input
            id="note-checkbox"
            type="checkbox"
            value=""
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            onChange={(e) => onToggleNoteChange(e)}
            checked={
              currentSurah.length > 0 &&
              Object.values(showNote).every((val) => val === true)
            }
          />
          <label
            htmlFor="note-checkbox"
            className="ms-2 text-sm font-medium text-greybg"
          >
            Notes
          </label>
        </div>
        <h1>Feature still in development!</h1>
      </div>
    </>
  );
}
