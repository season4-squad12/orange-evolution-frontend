/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { DividerContent } from '../ContentScreen/style'
import { Header } from '../Header'
import MenuAdmin from '../MenuAdmin'
import { ButtonAdd, ButtonEdit, CardContent, CardModule, CardTrail, MainManagement, NameContentAndEdit, NameModule, NameTrail, Panel, SubtrailAndEdit } from './Style'
import iconEdit from '../../images/icon-edit.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestContentsAll, requestSubtrailsAll, requestTrailssAll, setToken } from '../../services/api'
import { useEffect } from 'react'
import ModalCreateSubtrail from '../Modals/ModalSubTrail/ModalCreateSubtrail'
import ModalUpdateSubtrail from '../Modals/ModalSubTrail/ModalUpdateSubtrail'
import ModalCreateTrail from '../Modals/ModalTail/ModalCreateTrail'
import ModalUpdateTrail from '../Modals/ModalTail/ModalUpdateTrail'
import ModalCreateContent from '../Modals/ModalContent/ModalCreateContent'
import ModalUpdateContent from '../Modals/ModalContent/ModalUpdateContent'

const Management = () => {
  const [selectModo, setModo] = useState('Trilhas');
  const [trails, setTrails] = useState([]);
  const [subtrails, setSubtrails] = useState([]);
  const [contents, setContents] = useState([]);

  //state para os modals trail
  const [opCreateTrail, setOpCreateTrail] = useState(false);
  const [opUpdateTrail, setOpUpdateTrail] = useState(false);

  const [selectTrail, setSelectTrail] = useState({});

  const openModalCreateTrail = () => {
    setOpCreateTrail(true);
  };

  const openUpdatetrail = (trail) => {
    setSelectTrail(()=> trail)
    setOpUpdateTrail(true);
  };

/*   //state para os modals subtrails */
  const [opCreateSubtrail, setOpCreateSubtrail] = useState(false);
  const [opUpdateSubtrail, setOpUpdateSubtrail] = useState(false);

   const [selectSubtrail, setSelectSubtrail] = useState({});
   
  const openModalCreateSubtrail = () => {
    setOpCreateSubtrail(true);
  };

  const openUpdateSubtrail = (subtrail) => {
    setSelectSubtrail(()=> subtrail)
    setOpUpdateSubtrail(true);
  };
  //state para os content
  const [opCreateContent, setOpCreateContent] = useState(false);
  const [opUpdateContent, setOpUpdateContent] = useState(false);

  const [selectContent, setSelectContent] = useState({});
   
  const openModalCreateContent = () => {
    setOpCreateContent(true);
  };

  const openUpdateContent = (content) => {
    setSelectContent(()=> content)
    setOpUpdateContent(true);
  };

  const changeModo = (modo) => {
    setModo(modo)
  };

  const navigate = useNavigate();

  const reqTrails = async () => {
    const { user, token } =  JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('/login');
    try {
      setToken(token);
      const result = await requestTrailssAll();
      if (result) {
          setTrails(result);
      }
    } catch(e) {
        console.log(e)
    }
  };

  const reqSubtrails = async () => {
    const { user, token } =  JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('/login');
    try {
      setToken(token);
      const result = await requestSubtrailsAll();
      if (result) {
          setSubtrails(result);
      }
    } catch(e) {
        console.log(e)
    }
  };

  const reqContents = async () => {
    const { user, token } =  JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('/login');
    try {
      setToken(token);
      const result = await requestContentsAll();
      if (result) {
          setContents(result);
      }
    } catch(e) {
        console.log(e)
    }
  };

  useEffect(() => {
    reqContents();
    reqSubtrails();
    reqTrails();
  }, []);


  return (
    <>
      <Header />
        <MainManagement>
          <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <p style={{width:'200px',padding:'20px'}}>Gerenciamento de conte??dos e trilhas
            </p>
          <DividerContent />
          </div>
          
          { selectModo === "Trilhas" && (
            <ButtonAdd onClick={openModalCreateTrail}><p style={{color:'#FFFFFF', fontWeight:'bold',fontSize:'15px'}}>+ Adicionar Uma Nova Trilha</p></ButtonAdd>
          )}

          { selectModo === "M??dulos" && (
            <ButtonAdd onClick={openModalCreateSubtrail}><p style={{color:'#FFFFFF', fontWeight:'bold',fontSize:'15px'}}>+ Adicionar Um Novo M??dulo</p></ButtonAdd>
          )}

          {
            selectModo === "Conte??dos" && (
              <ButtonAdd onClick={openModalCreateContent}><p style={{color:'#FFFFFF', fontWeight:'bold',fontSize:'15px'}}>+ Adicionar Um Novo Conte??do</p></ButtonAdd>
            )
          }


          <p>Painel de visualiza????o</p>

          <div style={{width:'100%'}}>
            <Panel>
              <button onClick={()=> changeModo('Trilhas') }>
              Trilhas
              </button>
              <button onClick={()=> changeModo('M??dulos') }>
              M??dulos
              </button>
              <button onClick={()=> changeModo('Conte??dos')}>
              Conte??dos
              </button>
            </Panel>
          <DividerContent style={{marginBottom:'10px'}}/>
          </div>

          {/* Card gerenciamento de trilhas */}
          { selectModo === "Trilhas" && (
            trails.map((trail, index) => (
              <CardTrail key={index}>
              <p style={{fontWeight:'bold'}}>{trail.name}</p>
              <ButtonEdit onClick={() => openUpdatetrail(trail)}>
                <img src={iconEdit} alt="" />
              </ButtonEdit>
              </CardTrail>
            ))
          )}

          {/* Card gerenciamento de m??dulos */}
          { selectModo === "M??dulos" && (
            subtrails.map((subtrail, index) => 
              <CardModule key={index}>
                <SubtrailAndEdit>
                  <p>{subtrail.name} </p>
                  <ButtonEdit onClick={() => openUpdateSubtrail(subtrail)}>
                  <img src={iconEdit} alt="" />
                  </ButtonEdit>
                </SubtrailAndEdit>
                <p style={{alignSelf:'flex-start',marginLeft:'10px',color:'#767676'}}>M??dulo 01</p>
                <DividerContent style={{width:'95%', margin:'5px 0'}}/>
                <NameTrail>
                  <p>Trilha</p>
                  <p>Nome da trilha</p>
                </NameTrail>
              </CardModule>
            )
          )}

          {/* Card gerenciamento de conte??do */}
          { selectModo === "Conte??dos" && (
            contents.map((content) => 
              <CardContent>
                <NameContentAndEdit>
                  <p>{content.title}</p>
                  <ButtonEdit onClick={() => openUpdateContent(content)}>
                    <img src={iconEdit} alt="" />
                  </ButtonEdit>
                </NameContentAndEdit>
                <p style={{alignSelf:'flex-start',marginLeft:'10px',color:'#767676'}}>Conte??do 01</p>
                <DividerContent style={{width:'95%', margin:'5px 0'}}/>
                <NameTrail>
                  <p>Trilha</p>
                  <p>Nome da trilha</p>
                </NameTrail>
                <DividerContent style={{width:'95%', margin:'5px 0'}}/>
                <NameModule>
                <p>M??dulo</p>
                <p>Nome do m??dulo</p>
                </NameModule>
              </CardContent>
            )
          )}
        </MainManagement>
        <ModalCreateTrail isOpen={opCreateTrail} setIsOpen={setOpCreateTrail} />
        {selectTrail.name && 
          <ModalUpdateTrail isOpen={opUpdateTrail} setIsOpen={setOpUpdateTrail} trail={selectTrail}/>
        }
        {selectSubtrail.name &&
          <ModalUpdateSubtrail isOpen={opUpdateSubtrail} setIsOpen={setOpUpdateSubtrail} subtrail={selectSubtrail} />
        }
        <ModalCreateSubtrail isOpen={opCreateSubtrail} setIsOpen={setOpCreateSubtrail} />
        <ModalCreateContent isOpen={opCreateContent} setIsOpen={setOpCreateContent} />
        {selectContent.title &&
          <ModalUpdateContent isOpen={opUpdateContent} setIsOpen={setOpUpdateContent} content={selectContent}/>
        }
      <MenuAdmin />
    </>
  )
}

export default Management