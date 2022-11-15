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
// import ModalCreateContent from '../Modals/ModalContent/ModalCreateContent'
// import ModalUpdateContent from '../Modals/ModalContent/ModalUpdateContent'

const Management = () => {
  const [selectModo, setModo] = useState('Trilhas');
  const [trails, setTrails] = useState([]);
  const [subtrails, setSubtrails] = useState([]);
  // const [contents, setContents] = useState([]);

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
   
  const openModalCreateSutrail = () => {
    setOpCreateTrail(true);
  };

  const openUpdateSutrail = (subtrail) => {
    setSelectSubtrail(()=> subtrail)
    setOpUpdateSubtrail(true);
  };
  //state para os content
  /*const [opCreateContent, setOpCreateContent] = useState(false);
  const [opUpdateContent, setOpUpdateContent] = useState(false); */

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

  /* const reqContents = async () => {
    const { user, token } =  JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('/login');
    try {
      setToken(token);
      const result = await requestContentsAll();
      if (result) {
          setTrails(result);
      }
    } catch(e) {
        console.log(e)
    }
  }; */

  useEffect(() => {
    // reqContents();
    reqSubtrails();
    reqTrails();
  }, []);


  return (
    <>
      <Header />
        <MainManagement>
          <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <p style={{width:'200px',padding:'20px'}}>Gerenciamento de conteúdos e trilhas
            </p>
          <DividerContent />
          </div>
          
          { selectModo === "Trilhas" && (
            <ButtonAdd onClick={openModalCreateTrail}><p style={{color:'#FFFFFF', fontWeight:'bold',fontSize:'15px'}}>+ Adicionar Uma Nova Trilha</p></ButtonAdd>
          )}

          { selectModo === "Módulos" && (
            <ButtonAdd><p style={{color:'#FFFFFF', fontWeight:'bold',fontSize:'15px'}}>+ Adicionar Um Novo Módulo</p></ButtonAdd>
          )}

          {
            selectModo === "Conteúdos" && (
              <ButtonAdd><p style={{color:'#FFFFFF', fontWeight:'bold',fontSize:'15px'}}>+ Adicionar Um Novo Conteúdo</p></ButtonAdd>
            )
          }


          <p>Painel de visualização</p>

          <div style={{width:'100%'}}>
            <Panel>
              <button onClick={()=> changeModo('Trilhas') }>
              Trilhas
              </button>
              <button onClick={()=> changeModo('Módulos') }>
              Módulos
              </button>
              <button onClick={()=> changeModo('Conteúdos')}>
              Conteúdos
              </button>
            </Panel>
          <DividerContent style={{marginBottom:'10px'}}/>
          </div>

          {/* Card gerenciamento de trilhas */}
          { selectModo === "Trilhas" && (
            trails.map((trail) => (
              <CardTrail>
              <p style={{fontWeight:'bold'}}>{trail.name}</p>
              <ButtonEdit onClick={() => openUpdatetrail(trail)}>
                <img src={iconEdit} alt="" />
              </ButtonEdit>
              </CardTrail>
            ))
          )}

          {/* Card gerenciamento de módulos */}
          { selectModo === "Módulos" && (
            subtrails.map((subtrail) => 
              <CardModule>
                <SubtrailAndEdit>
                  <p>{subtrail.name} </p>
                  <ButtonEdit onClick={() => openUpdateSutrail(subtrail)}>
                  <img src={iconEdit} alt="" />
                  </ButtonEdit>
                </SubtrailAndEdit>
                <p style={{alignSelf:'flex-start',marginLeft:'10px',color:'#767676'}}>Múdulo 01</p>
                <DividerContent style={{width:'95%', margin:'5px 0'}}/>
                <NameTrail>
                  <p>Trilha</p>
                  <p>Nome da trilha</p>
                </NameTrail>
              </CardModule>
            )
          )}

          {/* Card gerenciamento de conteúdo */}
          { selectModo === "Conteúdos" && (
          <CardContent>
            <NameContentAndEdit>
              <p>Nome do conteúdo</p>
              <ButtonEdit>
                <img src={iconEdit} alt="" />
              </ButtonEdit>
            </NameContentAndEdit>
            <p style={{alignSelf:'flex-start',marginLeft:'10px',color:'#767676'}}>Conteúdo 01</p>
            <DividerContent style={{width:'95%', margin:'5px 0'}}/>
            <NameTrail>
              <p>Trilha</p>
              <p>Nome da trilha</p>
            </NameTrail>
            <DividerContent style={{width:'95%', margin:'5px 0'}}/>
            <NameModule>
            <p>Módulo</p>
            <p>Nome do módulo</p>
            </NameModule>
          </CardContent>
          )}
        </MainManagement>
        
        <ModalCreateTrail isOpen={opCreateTrail} setIsOpen={setOpCreateTrail} />
        <ModalUpdateTrail isOpen={opUpdateTrail} setIsOpen={setOpUpdateTrail} trail={selectTrail}/>
      <MenuAdmin />
    </>
  )
}

export default Management