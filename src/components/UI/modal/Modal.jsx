import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import './Modal.css';


const Modal = ({ title, children, onClose}) => {

    return createPortal(
        <>
            <div className="backdrop" onClick={onClose}></div>
            <motion.dialog
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                open
                className="modal">

                    <div className="modal-header pb-5 flex">
                        <h2 className="font-bold">{title}</h2>
                        <button className="close" onClick={onClose}><IoIosClose size={28} /></button>
                    </div>
                
                {children}
            </motion.dialog>
        </>,
        document.getElementById('modal')
    );
}

export default Modal;