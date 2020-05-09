import React from 'react'
import styled from 'styled-components'
import Pagamentos from '../img/pag.png'
import LogoTwitter from '../img/twitter.png'
import LogoFace from '../img/facebook.png'
import LogoInstagram from '../img/instagram.png'
import LogoSeg1 from '../img/seguranca1.png'
import LogoSeg2 from '../img/seguranca2.png'

const FundoRodape = styled.div`
    width: 100%;
    height: 40vh;
    background-color: #ff8f00;
    color: #fff8e1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Informacoes = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`
const FormContato = styled.section`
padding-left:4vw;
`
const FormasPag = styled.section`

`
const Certificados = styled.section`
padding-right: 4vw;
`
const TituloPag = styled.h4`
`
const ImagemPag = styled.img`
    width: 20vw;
`

const InputContato = styled.input`
width:250px;
height: 30px;
border-radius: 5px;
`
const BotaoEnviarContato = styled.button`
width: 80px;
height: 30px;
border-radius: 5px;
background-color: #ffa000;
`

const TextoPag = styled.p`
`
const RedesSociais = styled.section`
    display: flex;
    width: 100%;
    /* justify-content: space-between; */
    align-items: center;
    padding-left: 4vw;
`
const TelaToda = styled.div`
    margin:0;
    padding:0;
`

class Rodape extends React.Component {

    render() {
        return(
            <TelaToda>
                    <FundoRodape>
                        <Informacoes>
                            <FormContato>
                                <h3>Entre em contato com a gente:</h3>
                                <p>Nome:</p><InputContato type="text" name="nome" placeholder="Insira seu nome"></InputContato>
                                <p>Email:</p><InputContato type="email" name="email" placeholder="Insira seu email"></InputContato>
                                <p>Mensagem:</p><InputContato type="text" name="mensagem" placeholder="Insira seu sua mensagem"></InputContato>
                                
                                <BotaoEnviarContato color="primary">Enviar</BotaoEnviarContato>
                            </FormContato>
                            <FormasPag>
                                <ImagemPag src={Pagamentos} alt={'Forma de Pagamentos'} />
                            </FormasPag>
                            <Certificados>
                                <img src={LogoSeg1} alt="Logo de Segurança 1" />
                                <img src={LogoSeg2} alt="Logo de Segurança 2" />
                            </Certificados>
                        </Informacoes>
                        <RedesSociais>
                            <img src={LogoTwitter} alt="Logo Twitter" />
                            <img src={LogoFace} alt="Logo Facebook" />
                            <img src={LogoInstagram} alt="Logo Instagram" />
                        </RedesSociais>
                    </FundoRodape>
            </TelaToda>
        );
    }
}
export default Rodape