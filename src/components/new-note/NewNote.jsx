import Modal from "../UI/modal/Modal";
import './NewNote.css'


const NewNote = ({ 
    onDone, 
    onSave,
    onNoteChange,
    editNoteData 
}) => {

    return (
        <Modal title="New Note" onClose={onDone}>
            <form id="new-note" onSubmit={onSave}>
                <p>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" onChange={(e) => onNoteChange(e, "title")} />
                </p>
                <p>
                    <label htmlFor="description" className="mt-3">Description</label>
                    <textarea name="description" id="description" onChange={(e) => onNoteChange(e, "description")} />
                </p>

                <p className="new-note-actions mt-5 text-end">
                    <button type="button" className="hover:bg-gray-200 me-2" onClick={onDone}>
                        Cancel
                    </button>
                    <button className="hover:bg-gray-200">Add Note</button>
                </p>
            </form>
        </Modal>
    )
}

export default NewNote;
