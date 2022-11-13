import React from 'react'
import { Header } from '../Header'
import MenuFooter from '../MenuFooter/MenuFooter'
import { Ancor, BoxDiscord, ButtonAccess, ButtonFeedBack, CardDescription, DcTitleAndDescription, Description, DescriptionSpace, DiscorDescription, DiscordTitle, DivButton, DividerContent, IconsDiscord, MainContent, NameAndTrail, NameContent, NumberContent, OrangeJuiceDc, ReturnMenuTrail, TextFeedback, TitleFeedBack, TrailContent, TrailDescription, TypeContent } from './style'
import returnTrail from '../../images/returnTrail.png'
import iconeRelogio from '../../images/icone-relogio.png'
import iconDiscord1 from '../../images/icon-discord1.png'
import iconDiscord2 from '../../images/icon-discord.png'

const ContentScreen = () => {
  return (
    <>
      <Header />
      <MainContent>
        <ReturnMenuTrail>
          <img src={returnTrail} alt="" /> Voltar para a trilha
        </ReturnMenuTrail>
        <TrailDescription>
          <p>Subtrilha</p>
          <DividerContent />
        </TrailDescription>

        <TypeContent>
          <p>Tipo | </p>
          <p><img src={iconeRelogio} alt="" /> tempo | </p>
          <p> Produtor</p>
        </TypeContent>
        <NameAndTrail>
          <NumberContent>Conteudo 02
          </NumberContent>
          <TrailContent>
            Nome da trilha
          </TrailContent>
          <NameContent>

            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </NameContent>
        </NameAndTrail>

        <CardDescription>
          <DescriptionSpace>
            Descrição:
          </DescriptionSpace>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nulla eius voluptas amet corporis saepe, molestias ex minima iusto nostrum reprehenderit neque aperiam culpa, possimus aut cupiditate in quod vel.
          </Description>
        </CardDescription>

        <DivButton>
          <Ancor href="http://g1.com">
            <ButtonAccess>
              Acessar
            </ButtonAccess>
          </Ancor>
        </DivButton>

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

            <img src={iconDiscord2} alt="botão para acessar o grupo do discord" />
            </IconsDiscord>
          </BoxDiscord>

        {/* feedback */}
        <TitleFeedBack>
          O que achou do conteúdo?
        </TitleFeedBack>
        <p style={{ color: '#001024', fontSize: '13px', margin: '5px 0px' }}>Nós queremos te ouvir! =D</p>

        
        <TextFeedback placeholder='Quer deixar um feedback sobre o conteúdo que acabou de acessar? Escreva aqui!'>
        </TextFeedback>
        <ButtonFeedBack>Enviar</ButtonFeedBack>


      </MainContent>
      <MenuFooter />
    </>
  )
}

export default ContentScreen