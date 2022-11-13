import React from 'react'
import { Author, ButtonForContent, CardCapsule, CardTrailOne, CircleCard, DividerCircle, DividerInfos, Evaluation, IdCard, InfosCard, TitleContent, TypeContent } from '../MenuTrail/style'
import content from '../../images/content.png'
import polygon from '../../images/polygon.png';
import polygonDown from '../../images/polygon-down.png';
import { useState } from 'react'
import { DivContents, DividerSubtrails, DivPolygon, NameSubtrail} from './Style';




export const DropDownSubtrail = () => {

  const numbers = [1, 2, 3]
  const [drop, setDrop] = useState(false)

  const changeDrop = () => setDrop(!drop)

  return (
    <>
      <DivPolygon onClick={changeDrop}>
        <DividerSubtrails/>
        <NameSubtrail>
          <p>Subtrilhas</p>
          <img src={drop ? polygonDown : polygon} alt="" />
        </NameSubtrail>
      </DivPolygon>
      <DivContents drop={drop}>
        {numbers.map((_item,index) => (

          <CardCapsule key={index}>

            <CircleCard>
              <IdCard>10</IdCard>
              <DividerCircle />
              <Evaluation>★ 4.0</Evaluation>
            </CircleCard>
            <CardTrailOne>
              <InfosCard>
                <TypeContent>
                  Glossário
                </TypeContent>
                <TitleContent>
                  Lorem ipsum Lorem ipsum
                </TitleContent>
                <DividerInfos />
                <Author>
                  Gustavo Guanabara
                </Author>
              </InfosCard>
              <a href="http://g1.com.br" target="_blank" rel="noreferrer">
                <ButtonForContent src="jogoaberto.com" >
                  <img src={content} alt="seta para acessar o conteúdo a ser estudado" />
                </ButtonForContent>
              </a>
            </CardTrailOne>
          </CardCapsule>
        ))
        }
      </DivContents>
    </>
  )
};
