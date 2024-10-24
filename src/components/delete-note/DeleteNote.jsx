import Modal from "../UI/modal/Modal";
import { CgDanger } from "react-icons/cg";
import './DeleteNote.css';


const DeleteNote = ({ id, index, deleteNote, onClose }) => {

    const handleDelete = () => {
        deleteNote(id, index);
        onClose();
    }

    return (
        <Modal title="Delete Note" onClose={onClose}>
            <CgDanger className="text-red-600 danger" size={45} />
            <p className="text-center mt-5">You are about to delete this note.</p>
            <p className="text-center">Are you sure?</p>
            <p className="delete-note-actions mt-10 text-center">
                <button className="keep me-5 hover:bg-gray-200" onClick={onClose}>
                    No, Keep It.
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white"
                        onClick={handleDelete}>
                    Yes, Delete!
                </button>
            </p>
        </Modal>
    )
}

export default DeleteNote;