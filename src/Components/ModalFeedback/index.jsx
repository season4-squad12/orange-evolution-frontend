import React from "react";
import { Modal, ModalHeader} from "../../styles/Modal";
import { ModalContainer, CardFeedback, DividerContent } from './style';
import close from '../../images/close.png'

const ModalFeedaback = ({ isOpen, setIsOpen, feedback }) => {

  const closeModal = () => {
    setIsOpen(false);
  }

  return(
    <Modal open={isOpen}>
      <ModalContainer>
        <ModalHeader>
            <h2>Feedback</h2>
            <button onClick={ closeModal }>
              <img src={close} alt="botao de fechar modal" />
            </button>
          </ModalHeader>
        <CardFeedback>
            <p>
                {feedback.content} | {feedback.content} | {feedback.subtrail}
            </p>
            <DividerContent style={{width:'90%',margin:'10px'}}/>
              <p>{feedback.message}</p>
            </CardFeedback>

      </ModalContainer>
    </Modal>
  );
};

export default ModalFeedaback;
