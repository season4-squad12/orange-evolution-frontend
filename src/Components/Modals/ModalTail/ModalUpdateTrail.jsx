import React, {useState} from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import close from '../../../images/close.png';
import { requestDeleteTrail, requestUpdateTrail, setToken } from '../../../services/api';
import { 
  Button, Input, Label, Modal, ModalContainer,
  ModalHeader, ModalBody, DivMenu, Card,
  TextArea, ModalFooter, Diviser,
} from '../../../styles/Modal';

const ModalUpdateTrail = ({ isOpen, setIsOpen, trail }) => {
  const [name, setValueName] = useState(trail.name);
  const [description, setValueDescription] = useState(trail.description);
  const [question, setValueQuestion] = useState(trail.question);
  const [response, setValueAnswer] = useState(trail.response);

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

  const deleteTrail = async () => {
    const { user, token } =  JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('/login');
    try {
      setToken(token)
      const result = await requestDeleteTrail(trail.id);
      if (result) {
          closeModal();
      }
  } catch(e) {
      console.log(e)
  }
  };

  const submitForm = async() => {
    const { user, token } =  JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('/login');
    try {
      setToken(token);
      const result = await requestUpdateTrail({
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

  useEffect(()=>{
  }, [])

  return (
    <Modal open={ isOpen }>
      <ModalContainer>
        <ModalHeader>
            <h2>Editar Trilha</h2>
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
            <ModalFooter positionButton="space-between">
              <Button bgColor="#FF0000" margin="0 0 0 15px" onClick={deleteTrail}>Excluir</Button>
              <Button bgColor="#00856C" margin="0 15px 0 0" onClick={submitForm}>Adicionar</Button>

            </ModalFooter>
            
        </ModalBody>
      </ModalContainer>
    </Modal>
  )
}

export default ModalUpdateTrail;