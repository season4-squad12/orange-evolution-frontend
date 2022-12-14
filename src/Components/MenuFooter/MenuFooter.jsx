import React from 'react'
import { ButtonFooter, Navegation } from './style'
import trails from '../../images/trilhas-footer.png'
import user from '../../images/user-footer.png'


const MenuFooter = () => {
  return (
    <Navegation>
      <ButtonFooter><img src={trails} alt="botão para acessar as trilhas disponiveis" />
      </ButtonFooter>
      <ButtonFooter><img src={user} alt="botão para acessar a dashboard do usuário" />
      </ButtonFooter>
      <p>
        Orange Evolution - 2022
      </p>
    </Navegation>
  )
}

export default MenuFooter