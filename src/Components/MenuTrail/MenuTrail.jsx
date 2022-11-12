import React from 'react'
import { Header } from '../Header'
import MainCardTrails, { Author, ButtonForContent, CardCapsule, CardTrailOne, CircleCard, DividerCircle, DividerInfos, Evaluation, IdCard, InfosCard, TitleContent, TypeContent } from './style'
import content from '../../images/content.png'
import MenuFooter from '../MenuFooter/MenuFooter'
const CardTrail = () => {
  return (

    <MainCardTrails>
      <Header />




      <CardCapsule>

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
            <DividerInfos/>
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




      <MenuFooter/>
    </MainCardTrails>

  )
}

export default CardTrail