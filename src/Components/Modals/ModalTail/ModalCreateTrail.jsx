import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import close from '../../../images/close.png';
import { requestCreateTrail, setToken } from '../../../services/api';
import { 
  Button, Input, Label, Modal, ModalContainer,
  ModalHeader, ModalBody, DivMenu, Card,
  TextArea, ModalFooter, Diviser,
} from '../../../styles/Modal';

const ModalCreateTrail = ({ isOpen, setIsOpen }) => {
  const [name, setValueName] = useState('');
  const [description, setValueDescription] = useState('');
  const [question, setValueQuestion] = useState('');
  const [response, setValueAnswer] = useState('');

  const changeName = ({ target: { value }}) => {
    setValueName(value)
  };

  const changeDescription = ({ target: { value }}) => {
    setValueDescription(value)
  };

  const changeQuestion = ({ target: { value }}) => {
    setValueQuestion(value)
  };

  const changeResponse = ({ target: { value }}) => {
    setValueAnswer(value)
  };

  const closeModal = () => {
    setIsOpen(false);
  }

  const navigate = useNavigate();

  const submitForm = async() => {
    const { user, token } =  JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('/login');
    try {
      setToken(token);
      const result = await requestCreateTrail({
          name,
          description,
          question,
          response,
          icone: '',
          color: '#001024',
        });
      if (result) {
          closeModal()
      }
    } catch(e) {
        console.log(e)
    }
  };
  

  return (
    <Modal open={ isOpen }>
      <ModalContainer>
        <ModalHeader>
            <h2>Adicinar Nova Trilha</h2>
            <button onClick={ closeModal }>
              <img src={close} alt="botao de fechar modal" />
            </button>
        </ModalHeader>
        <DivMenu>
          <div>
            <Card color="white" bgcolor="#001024">Trilhas</Card>
            <Card color="#DADADA" bgcolor="white">Conteúdos</Card>
          </div>
          <div>
            <Card color="#DADADA" bgcolor="white">Métodos</Card>
            <Card color="#DADADA" bgcolor="white">Testes</Card>
          </div>
        </DivMenu>
        <ModalBody>
            <Label>
              Nome da trilha:
              <Input name="name" type="text" value={name} onChange={changeName}/>
            </Label>
            <Diviser />
            <Label>
              Descrição dos Conteúdos da trilha:
              <TextArea name="description" value={description} onChange={changeDescription} />
            </Label>
            <Label>
              Pergunta(O que a pessoa faz _____?)
              <Input name="question" type="text" value={question} onChange={changeQuestion} />
            </Label>
            <Label>
              Breve explicação da atuação do profissional:
              <TextArea name="response" value={response} onChange={changeResponse} />
            </Label>
            <ModalFooter positionButton="end">
              <Button bgColor="#00856C" margin="0 15px 0 0" onClick={submitForm}>Adicionar</Button>
            </ModalFooter>
            
        </ModalBody>
      </ModalContainer>
    </Modal>
  )
}

export default ModalCreateTrail;