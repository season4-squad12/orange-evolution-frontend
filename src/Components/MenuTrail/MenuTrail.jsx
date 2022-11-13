import React from 'react'
import { Header } from '../Header'
import MainCardTrails from './style'
import MenuFooter from '../MenuFooter/MenuFooter'
import { DropDownSubtrail } from '../DropDownSubtrails'

const CardTrail = () => {
  const array = [1, 2, 3]
  return (
    <>
      <Header />     
      <MainCardTrails>
        {
          array.map((_item, index) => (
            <DropDownSubtrail key={index}/>
          ))
        }

      </MainCardTrails>
      <MenuFooter />

    </>

  )
}

export default CardTrail;