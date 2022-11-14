import React, {useContext} from 'react'
import { Header } from '../Header'
import MainCardTrails, { DivFilters } from './style'
import MenuFooter from '../MenuFooter/MenuFooter'
import { DropDownSubtrail } from '../DropDownSubtrails'
import {InputSelect} from '../../styles/InputSelect'
import { useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import polygon from '../../images/polygon.png'

const CardTrail = () => {  
  const {trails} = useContext(GlobalContext)
  const [trailActive, setTrailActive] = useState(undefined);

  const changeSelect = ({target:{value}}) => {
    setTrailActive(trails[value]);
  }

  return (
    <>
      <Header /> 
      <main>    
      <MainCardTrails>
        <DivFilters>
        {/* <div> */}
        <InputSelect>
          <select name="trails" onChange={changeSelect}>
          <option>Selecione uma trilha</option>
          {
          trails?.map((trail, index)=>(
            <option value={index} key={trail.id}>
              Trilha {trail.name}
            </option>
          ))}
          
          </select>
          <img src={polygon} alt="" />
        </InputSelect>
        {/* </div> */}

        </DivFilters>
            {
              !trailActive &&
                <p>Nenhuma trilha selecionada.</p>
            }
        { 
          /* !trailActive ?
            trails[0] &&
            trails[0].subtrilhas &&
              trails[0].subtrilhas.length > 0? (
                trails[0]?.subtrilhas?.map((subtrail, index) => (
                  <DropDownSubtrail key={index} subtrail={subtrail} />
                )
              )) : (
                <p>Nenhuma subtrilha encontrada.</p>
              ) */
          trailActive &&
            trailActive.subtrilhas &&
              trailActive.subtrilhas.length < 1 ?
                <p>Nenhuma subtrilha encontrada.</p>
              :
              trailActive?.subtrilhas?.map((subtrail, index) => (
                <DropDownSubtrail key={index} subtrail={subtrail} />
              ))
        }
    
      </MainCardTrails>
      </main>
      <MenuFooter />
      
    </>

  )
}

export default CardTrail;