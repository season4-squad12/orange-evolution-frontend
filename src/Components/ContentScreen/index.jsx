/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext } from 'react'
import { Header } from '../Header'
import MenuFooter from '../MenuFooter/MenuFooter'
import { Ancor, BoxDiscord, ButtonAccess, ButtonFeedBack, CapsuleTypeContent, CardDescription, CircleNumber, DcTitleAndDescription, Description, DescriptionSpace, DiscorDescription, DiscordTitle, DivButton, DividerContent, DivInfos, IconsDiscord, MainContent, NameAndTrail, NameContent, NumberContent, OrangeJuiceDc, ReturnMenuTrail, TextFeedback, TitleFeedBack, TrailContent, TrailDescription, TypeContent } from './style'
import returnTrail from '../../images/returnTrail.png'
import iconeRelogio from '../../images/icone-relogio.png'
import iconDiscord1 from '../../images/icon-discord1.png'
import iconDiscord2 from '../../images/icon-discord.png'
import { requestContent, requestCreateFeedback, setToken } from '../../services/api'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'

const ContentScreen = () => {
  const {paramContent} = useContext(GlobalContext)
  const [contentDetails, setContent] = useState({});
  const [feedbck, setFeedback] = useState('');

  const changeTextArea = ({ target: value }) => {
    setFeedback(value);
  };

  const navigate = useNavigate();

  const contentReq = async () => {
    const { user, token } =  JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('/login');
    try {
      setToken(token);
      
      if (paramContent.id) {
        const result = await requestContent(paramContent.id)
        setContent(result)
      }
    } catch(e) {
      console.log(e)
    }
  };

  const submitFeedback = async () => {
    const { user, token } =  JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('/login');
    try {
      setToken(token);
      const result = await requestCreateFeedback({
        message: feedbck,
        trail: paramContent.trail,
        subtrail: paramContent.subtrail,
        content: paramContent.id,
      })
  
      if(result) console.log('enviado');
      
    } catch(e) {
        console.log(e)
    }
  };

  useEffect(() => {
    contentReq();
  }, []);

  return (
    <>
      <Header />
      <MainContent>
        <ReturnMenuTrail>
          <img src={returnTrail} alt="" /> Voltar para a trilha
        </ReturnMenuTrail>
        <DivInfos>
          <TrailDescription>
            <p>{paramContent?.subtrail}</p>
          </TrailDescription>
          <DividerContent />
          <TypeContent>
            <p>{contentDetails.type}| </p>
            <span><img src={iconeRelogio} alt="" />{contentDetails.duraction}| </span>
            <p>{contentDetails.author}</p>
            </TypeContent>

          <CapsuleTypeContent>
            <CircleNumber>
              <p>{paramContent?.index}</p>
            </CircleNumber>
            <NameAndTrail>
            <NumberContent>Conteudo {paramContent?.index}
            </NumberContent>
            <TrailContent>
              {paramContent.subtrail}
            </TrailContent>
            <NameContent>

              {contentDetails.title}.
            </NameContent>
          </NameAndTrail>
            
          </CapsuleTypeContent>

        

          <CardDescription>

            <Description>
              <DescriptionSpace>
                Descrição:
              </DescriptionSpace>
              {contentDetails.description}
            </Description>

            <DivButton>
              <Ancor href={contentDetails.link} target="_blank">
                <ButtonAccess>
                  Acessar
                </ButtonAccess>
              </Ancor>
            </DivButton>
          </CardDescription>


        </DivInfos>
        <BoxDiscord>
          <DcTitleAndDescription>
            <DiscordTitle>
              Comunidade no Discord
            </DiscordTitle>
            <DiscorDescription>
              Participe do grupo
              <OrangeJuiceDc> Orange Juice </OrangeJuiceDc>
              para tirar dúvidas e interagir com outros alunos!
            </DiscorDescription>
          </DcTitleAndDescription>

          <IconsDiscord>
            <img src={iconDiscord1} alt="icone do discord" />
          <a href="https://discord.com/invite/NtESsDFGx5" target={"_blank"} rel="noreferrer">
            <img src={iconDiscord2} alt="botão para acessar o grupo do discord" />
          </a>
          </IconsDiscord>
        </BoxDiscord>

        {/* feedback */}
        <TitleFeedBack value={feedbck} onChange={changeTextArea}>
          O que achou do conteúdo?
        </TitleFeedBack>
        <p style={{ color: '#001024', fontSize: '13px', margin: '5px 0px' }}>Nós queremos te ouvir! =D</p>


        <TextFeedback placeholder='Quer deixar um feedback sobre o conteúdo que acabou de acessar? Escreva aqui!'>
        </TextFeedback>
        <ButtonFeedBack onClick={ submitFeedback }>Enviar</ButtonFeedBack>


      </MainContent>
      <MenuFooter />
    </>
  )
}

export default ContentScreen