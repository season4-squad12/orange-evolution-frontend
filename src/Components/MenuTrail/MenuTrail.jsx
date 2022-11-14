import React, {useContext} from 'react'
import { Header } from '../Header'
import MainCardTrails, { DivFilters } from './style'
import MenuFooter from '../MenuFooter/MenuFooter'
import { DropDownSubtrail } from '../DropDownSubtrails'
import {InputSelect} from '../../styles/InputSelect'
import { useState } from 'react'
import { useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import polygon from '../../images/polygon.png'

const CardTrail = () => {
  const array = [1, 2, 3];
  
  const {trails} = useContext(GlobalContext)

  const [selectTrail, setselectTrail] = useState(0); 
  const changeSelect = ({target:{value}}) =>{
    setselectTrail(value)
  }

  useEffect(()=>{
    console.log(trails)
  },[]);

  return (
    <>
      <Header /> 
      <main>    
      <MainCardTrails>
        <DivFilters>
        {/* <div> */}
        <InputSelect>
          <select name="trails" value={selectTrail} onChange={changeSelect}>
          {
          trails.length>0 &&
          trails.map((trail)=>(
            <option value={trail.id} key={trail.id}>
              Trilha {trail.name}
            </option>
          ))}
          
          </select>
          <img src={polygon} alt="" />
        </InputSelect>
        {/* </div> */}

        </DivFilters>
        
        {
          trails.length > 0 && trails.subtrilhas &&
          trails.subtrilhas.map((trail, index) => (
            <DropDownSubtrail key={index} trail={trail} />
          ))
        }

      </MainCardTrails>
      </main>
      <MenuFooter />
      
    </>

  )
}

export default CardTrail;