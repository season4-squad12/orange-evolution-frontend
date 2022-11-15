import React from 'react'
import { DividerContent } from '../ContentScreen/style'
import { Header } from '../Header'
import MenuAdmin from '../MenuAdmin'
import { ButtonAdd, ButtonEdit, CardContent, CardModule, CardTrail, MainManagement, NameContent, NameContentAndEdit, NameModule, NameTrail, Panel, SubtrailAndEdit } from './Style'
import iconEdit from '../../images/icon-edit.png'

const Management = () => {
  return (
    <>
      <Header />
        <MainManagement>
          <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <p style={{width:'200px',padding:'20px'}}>Gerenciamento de conteúdos e trilhas
            </p>
          <DividerContent />
          </div>
          <ButtonAdd><p style={{color:'#FFFFFF', fontWeight:'bold',fontSize:'15px'}}>+ Adicionar</p></ButtonAdd>

          <p>Painel de visualização</p>

          <div style={{width:'100%'}}>
            <Panel>
              <button>
              Trilhas
              </button>
              <button>
              Módulos
              </button>
              <button>
              Conteúdos
              </button>
            </Panel>
          <DividerContent style={{marginBottom:'10px'}}/>
          </div>

          {/* Card gerenciamento de trilhas */}
          <CardTrail>
          <p style={{fontWeight:'bold'}}>Trilha</p>
          <ButtonEdit>
            <img src={iconEdit} alt="" />
          </ButtonEdit>
          </CardTrail>

          {/* Card gerenciamento de módulos */}
          <CardModule>
            <SubtrailAndEdit>
              <p>Nome da subtrilha    </p>
              <ButtonEdit>
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
          
          {/* Card gerenciamento de conteúdo */}
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
         
        </MainManagement>
      <MenuAdmin />
    </>
  )
}

export default Management