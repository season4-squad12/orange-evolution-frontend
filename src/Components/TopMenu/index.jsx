import React from 'react'
import { ButtonMenuTop, NavTop } from './style'

const TopMenu = () => {
  return (
    <NavTop>
      <ButtonMenuTop>
        <p>Trilhas</p>
      </ButtonMenuTop>
      <ButtonMenuTop>
        <p>Perfil</p>
      </ButtonMenuTop>
    </NavTop>
  )
}

export default TopMenu