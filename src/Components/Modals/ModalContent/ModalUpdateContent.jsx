import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import close from '../../../images/close.png';
import polygon from '../../../images/polygon-down.png';
import { requestDeleteContent, requestUpdateContent, setToken } from '../../../services/api';
import { 
  Button, Input, Label, Modal, ModalContainer,
  ModalHeader, ModalBody, DivMenu, Card,
  TextArea, SelectForm, DivDuoSelect, ModalFooter,
} from '../../../styles/Modal';

const ModalUpdateContent = ({ isOpen, setIsOpen, content }) => {
  const [ selectSubTrail, setSelectSubtrail] = useState('Módulo')
  const [valueTitle, setValueTitle] = useState(content.title);
  const [valueDescription, setValueDescription] = useState(content.description);
  const [valueType, setValueType] = useState(content.type);
  const [valueAuthor, setValueAuthor] = useState(content.author);
  const [valueDuration, setValueDuration] = useState(content.duration);
  const [valueLink, setValueLink] = useState(content.link);

  const closeModal = () => {
    setIsOpen(false);
  }

  const changeSubtrail = ({ target: { value }}) => {
    setSelectSubtrail(() => value)
  };

  const changeTitle = ({ target: { value }}) => {
    setValueTitle(() => value)
  };

  const changeDescription = ({ target: { value }}) => {
    setValueDescription(() => value)
  };

  const changeType = ({ target: { value }}) => {
    setValueType(() => value)
  };

  const changeAuthor = ({ target: { value }}) => {
    setValueAuthor(() => value)
  };

  const changeDuration = ({ target: { value }}) => {
    setValueDuration(() => value)
  };

  const changeLink = ({ target: { value }}) => {
    setValueLink(() => value)
  };

  const navigate = useNavigate();

  const deleteContent = async () => {
    const { user, token } =  JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('/login');
    try {
      setToken(token)
      const result = await requestDeleteContent(content.id);
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
      const result = await requestUpdateContent({
          name: valueTitle,
          description: valueDescription,
          type: valueType,
          author: valueAuthor,
          duration: valueDuration,
          status: '',
          link: valueLink,
          idUser: user.id,
          experience: 0,
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
                <select value={selectSubTrail} onChange={changeSubtrail}>
                  <option>UX/UI</option>
                  <option>UX/UI</option>
                </select>
                <img src={polygon} alt="" />
              </SelectForm>
            </Label>
            <Label>
              Nome do Conteúdo:
              <Input name="title" type="text" value={valueTitle} onChange={changeTitle} />
            </Label>
            <Label>
              Descrição do Conteúdo:
              <TextArea name="description" value={valueDescription} onChange={changeDescription} />
            </Label>
            <Label>
              Autor:
              <Input name="author" type="text" value={valueAuthor} onChange={changeAuthor} />
            </Label>
            <Label>
              Link:
              <Input name="link" type="text" value={valueLink} onChange={changeLink}/>
            </Label>
            <DivDuoSelect>
            <Label>
              Duração:
              <Input name="duration" type="text" wd="137px" value={valueDuration} onChange={changeDuration} />
            </Label>
            <Label>
              Selecione o módulo:
              <SelectForm wd="137px" >
                <select value={valueType} onChange={changeType}>
                  <option value="Artigo">Artigo</option>
                  <option value="Glossário">Glossário</option>
                  <option value="Live">Live</option>
                  <option value="Livro">Livro</option>
                </select>
                <img src={polygon} alt="" />
              </SelectForm>
            </Label>
            </DivDuoSelect>
            <ModalFooter positionButton="space-between">
              <Button bgColor="#FF0000" margin="0 0 0 15px" onChange={deleteContent}>Excluir</Button>
              <Button bgColor="#00856C" margin="0 15px 0 0" onClick={submitForm}>Adicionar</Button>
            </ModalFooter>
            
        </ModalBody>
      </ModalContainer>
    </Modal>
  )
}

export default ModalUpdateContent;
