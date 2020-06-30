import React from 'react'
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import styles from './ModalDisplay.module.scss';

Modal.setAppElement('#modal')

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: '400'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    paddingBottom: '40px',
  }
};

const ModalDisplay = ({ isOpen, closeModal, ...props }) => {

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <GrClose 
          onClick={closeModal}
          className={styles.modal__icon} 
          />
        {props.children}
      </Modal>
    </div>
  )
}

export default ModalDisplay
