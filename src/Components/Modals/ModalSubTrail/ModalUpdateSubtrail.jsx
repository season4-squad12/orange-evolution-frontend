import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import close from '../../../images/close.png';
import polygon from '../../../images/polygon-down.png';
import { requestDeleteSubtrail, requestUpdateSubTrail, setToken } from '../../../services/api';
import { 
  Button, Input, Label, Modal, ModalContainer,
  ModalHeader, ModalBody, DivMenu, Card,
  TextArea, SelectForm, ModalFooter,
} from '../../../styles/Modal';

const ModalCreateSubtrail = ({ isOpen, setIsOpen, subtrail }) => {
  const [name, setValueTitle] = useState(subtrail.tile);
  const [description, setValueDescription] = useState(subtrail.description);
  const [valueTrail, setValueTrail] = useState('Trilha');

  const changeTitle = ({ target: { value } }) => {
    setValueTitle(value);
  };

  const changeDescription = ({ target: { value } }) => {
    setValueDescription(value);
  };

  const changeTrail = ({ target: { value } }) => {
    setValueTrail(value);
  };

  const closeModal = () => {
    setIsOpen(false);
  }
  const navigate = useNavigate();

  const deleteContent = async () => {
    const { user, token } =  JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('/login');
    try {
      setToken(token)
      const result = await requestDeleteSubtrail(subtrail.id);
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
      const result = await requestUpdateSubTrail({
          name,
          description,
          idTrail: valueTrail,
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
            <h2>Adicinar Nova Módulo</h2>
            <button onClick={ closeModal }>
              <img src={close} alt="botao de fechar modal" />
            </button>
        </ModalHeader>
        <DivMenu>
          <div>
            <Card color="#DADADA" bgcolor="white">Trilhas</Card>
            <Card color="#DADADA" bgcolor="white">Conteúdos</Card>
          </div>
          <div>
            <Card color="white" bgcolor="#001024">Métodos</Card>
            <Card color="#DADADA" bgcolor="white">Testes</Card>
          </div>
        </DivMenu>
        <ModalBody>
            <Label>
              Nome do Módulo:
              <Input name="name" type="text" value={name} onChange={changeTitle} />
            </Label>
            <Label>
              Descrição do Módulo:
              <TextArea name="description" value={description} onChange={changeDescription} />
            </Label>
            <Label>
              Selecione a Trilha:
              <SelectForm value={valueTrail} onChange={changeTrail}>
                <select>
                  <option>UX/UI</option>
                  <option>UX/UI</option>
                </select>
                <img src={polygon} alt="" />
              </SelectForm>
            </Label>
            <ModalFooter positionButton="end">
              <Button bgColor="#FF0000" margin="0 0 0 15px" onChange={deleteContent}>Excluir</Button>
              <Button bgColor="#00856C" margin="0 15px 0 0" onClick={submitForm}>Adicionar</Button>
            </ModalFooter>
            
        </ModalBody>
      </ModalContainer>
    </Modal>
  )
}

export default ModalCreateSubtrail;