import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonMenuTop, NavTop } from './style'

const TopMenu = () => {
  const navigate = useNavigate();

  return (
    <NavTop>
      <ButtonMenuTop onClick={()=> navigate('/trilhas')}>
        <p>Trilhas</p>
      </ButtonMenuTop>
      <ButtonMenuTop onClick={()=> navigate('/perfil')}>
        <p>Perfil</p>
      </ButtonMenuTop>
    </NavTop>
  )
}

export default TopMenu