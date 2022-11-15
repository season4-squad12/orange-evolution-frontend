import React from 'react'
import { DividerContent } from '../ContentScreen/style'
import { Header } from '../Header'
import MenuAdmin from '../MenuAdmin'
import { CardFeedback, MainFeedback } from './Style'

const FeedbackAdmin = () => {
  return (
    <>
      <Header />

        <MainFeedback>
          <p style={{width:'80%', textAlign:'center'}}> 
            FEEDBACK DOS CONTEÚDOS PELOS USUÁRIOS
          </p>
          <DividerContent style={{width:'100%',margin:'20px'}}/>

          <CardFeedback>
            <p>
              Numero do conteudo | modulo | Trilha
            </p>
            <DividerContent style={{width:'90%',margin:'10px'}}/>
            <p>aqui vai o feedback do usuario. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id est nulla magnam nesciunt facilis amet labore quam perferendis libero eum ea reiciendis quaerat harum animi culpa debitis, mollitia neque?</p>
          </CardFeedback>
        </MainFeedback>

      <MenuAdmin />
    </>
  )
}

export default FeedbackAdmin