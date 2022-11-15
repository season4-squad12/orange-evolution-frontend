import React from 'react'
import { DividerContent } from '../ContentScreen/style'
import { Header } from '../Header'
import MenuAdmin from '../MenuAdmin'
import { ButtonAdd, MainManagement, Panel } from './Style'

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
          <DividerContent/>
          </div>

        </MainManagement>
      <MenuAdmin />
    </>
  )
}

export default Management