import React, {useState} from 'react';
import close from '../../../images/close.png';
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
              <Button bgColor="#FF0000" margin="0 0 0 15px">Excluir</Button>
              <Button bgColor="#00856C" margin="0 15px 0 0">Adicionar</Button>

            </ModalFooter>
            
        </ModalBody>
      </ModalContainer>
    </Modal>
  )
}

export default ModalUpdateTrail;