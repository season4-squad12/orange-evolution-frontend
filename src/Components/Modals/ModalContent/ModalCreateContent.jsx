import React from 'react';
import close from '../../../images/close.png';
import polygon from '../../../images/polygon-down.png';
import { 
  Button, Input, Label, Modal, ModalContainer,
  ModalHeader, ModalBody, DivMenu, Card,
  TextArea, SelectForm, DivDuoSelect, ModalFooter,
} from '../../../styles/style';

const ModalCreateContnet = ({ isOpen, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <Modal open={ isOpen }>
      <ModalContainer>
        <ModalHeader>
            <h2>Adicinar Novo Conteúdo</h2>
            <button onClick={ closeModal }>
              <img src={close} alt="botao de fechar modal" />
            </button>
        </ModalHeader>
        <DivMenu>
          <div>
            <Card color="#DADADA" bgcolor="white">Trilhas</Card>
            <Card color="white" bgcolor="#001024">Conteúdos</Card>
          </div>
          <div>
            <Card color="#DADADA" bgcolor="white">Métodos</Card>
            <Card color="#DADADA" bgcolor="white">Testes</Card>
          </div>
        </DivMenu>
        <ModalBody>
            <Label>
              Selecione o módulo:
              <SelectForm>
                <select>
                  <option>UX/UI</option>
                  <option>UX/UI</option>
                </select>
                <img src={polygon} alt="" />
              </SelectForm>
            </Label>
            <Label>
              Nome do Conteúdo:
              <Input name="tile" type="text" />
            </Label>
            <Label>
              Descrição do Conteúdo:
              <TextArea name="description"/>
            </Label>
            <Label>
              Autor:
              <Input name="author" type="text" />
            </Label>
            <Label>
              Link:
              <Input name="link" type="text" />
            </Label>
            <DivDuoSelect>
            <Label>
              Duração:
              <Input name="duration" type="text" wd="137px" />
            </Label>
            <Label>
              Selecione o módulo:
              <SelectForm wd="137px">
                <select>
                  <option>UX/UI</option>
                  <option>UX/UI</option>
                </select>
                <img src={polygon} alt="" />
              </SelectForm>
            </Label>
            </DivDuoSelect>
            <ModalFooter positionButton="space-between">
              <Button bgColor="#FF0000" margin="0 0 0 15px">Excluir</Button>
              <Button bgColor="#00856C" margin="0 15px 0 0">Adicionar</Button>

            </ModalFooter>
            
        </ModalBody>
      </ModalContainer>
    </Modal>
  )
}

export default ModalCreateContnet;