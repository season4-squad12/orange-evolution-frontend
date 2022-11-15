import React, {useContext} from 'react'
import { Author, ButtonForContent, CardCapsule, CardTrailOne, CircleCard, DividerCircle, DividerInfos, Evaluation, IdCard, InfosCard, TitleContent, TypeContent } from '../MenuTrail/style'
import content from '../../images/content.png'
import polygon from '../../images/polygon.png'
import polygonDown from '../../images/polygon-down.png'
import { useState } from 'react'
import { DivContents, DividerSubtrails, DivPolygon, NameSubtrail } from './Style'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'


export const DropDownSubtrail = ({subtrail, trail}) => {
  const { setParamContent } = useContext(GlobalContext)
  const navigate = useNavigate();

  const redirect = (id, url) => {
    setParamContent(id)
    navigate(url) 
  };

  const [drop, setDrop] = useState(false)

  const changeDrop = () => setDrop(!drop)

  return (
    <>
      <DivPolygon onClick={changeDrop}>
        
        <DividerSubtrails/>
        <NameSubtrail>
          <p>{subtrail.name}</p>
          <img src={drop ? polygonDown : polygon} alt="" />
        </NameSubtrail>
        
      </DivPolygon>
      
      <DivContents drop={drop}>
        {
          subtrail.conteudos?.map((item,index) => (
          <CardCapsule key={index}>

            <CircleCard>
              <IdCard>{index+1}</IdCard>
              <DividerCircle />
              <Evaluation>★ 4.0</Evaluation>
            </CircleCard>
            <CardTrailOne>
              <InfosCard>
                <TypeContent>

                  {item.type}
                </TypeContent>
                <TitleContent>
                  {item.title}
                </TitleContent>
                <DividerInfos />
                <Author>
                  {item.author}
                </Author>
              </InfosCard>
                <ButtonForContent onClick={ () => redirect({id: item.id, subtrail: subtrail.name, index: index+1, trail: trail}, '/conteudo')}>
                  <img src={content} alt="seta para acessar o conteúdo a ser estudado" />
                </ButtonForContent>
            </CardTrailOne>
          </CardCapsule>
        ))
        }
      </DivContents>
    </>
  )
};
