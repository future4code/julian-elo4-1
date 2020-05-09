import React from 'react'
import styled from 'styled-components'
import Pagamentos from '../img/pag.png'
import LogoTwitter from '../img/twitter.png'
import LogoFace from '../img/facebook.png'
import LogoInstagram from '../img/instagram.png'
import LogoSeg1 from '../img/seguranca1.png'
import LogoSeg2 from '../img/seguranca2.png'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
margin-left:4vw;
`
const ImgCertificados = styled.img`
    margin-right: 2vw;
`

const FormasPag = styled.section`
    margin-right: 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 25vw;
`
const IconesRedesSociais = styled.img`
    width: 3vw;
    height: 100%;
    margin-left:1vw;
`

const Certificados = styled.section`
    margin-left:2vw;

    /* display: flex;
    justify-content: baseline;
    align-items: center;
    min-width: 25vw; */
`
const TituloPag = styled.h4`
`
const ImagemPag = styled.img`
    width: 20vw;
    
`
const DivInput = styled.div`
    width: 50vh;
    
`

const TextContato = styled(TextField)`
   flex-basis: 100%;
    &&{
        background-color: rgba(255, 248, 225, 0.5);
        border-radius: 10px 10px 0 0;
    }
    width:400px;
  `

// const InputContato = styled.input`
// width:250px;
// height: 30px;
// border-radius: 5px;
// `
// const BotaoEnviarContato = styled.button`
// width: 80px;
// height: 30px;
// border-radius: 5px;
// background-color: #ffa000;
// `

const TextoPag = styled.p`
`
const RedesSociais = styled.section`
    margin-right: 4vw;
    display: flex;
    width: 100%;
    justify-content: flex-end; 
    /* align-items: center; */
    padding-left: -4vw;


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
                            <DivInput>   
                              <TextContato required id="standard-required" label="Nome"defaultValue="" />
                              <br/>
                              <TextContato required id="standard-required" label="Email" defaultValue="" />
                              <br/>
                              <TextContato 
                            label="Descrição"
                                    id="filled-size-small"
                                        size="normal"
                                    rows="5"
                                    multiline="100"
                                    />
                            </DivInput>


                                {/* <h3>Entre em contato com a gente:</h3>
                                <p>Nome:</p><InputContato type="text" name="nome" placeholder="Insira seu nome"></InputContato>
                                <p>Email:</p><InputContato type="email" name="email" placeholder="Insira seu email"></InputContato> */}
                                {/* <p>Mensagem:</p><InputContato type="text" name="mensagem" placeholder="Insira seu sua mensagem"></InputContato> */}
                                
                                {/* <BotaoEnviarContato color="primary">Enviar</BotaoEnviarContato> */}
                            </FormContato>
                            <FormasPag>
                                <ImagemPag src={Pagamentos} alt={'Forma de Pagamentos'} />
                            </FormasPag>
                            <Certificados>
                                <ImgCertificados src={LogoSeg1} alt="Logo de Segurança 1" /> 
                                <ImgCertificados src={LogoSeg2} alt="Logo de Segurança 2" />
                            </Certificados>
                        </Informacoes>
                        <RedesSociais>
                          <IconesRedesSociais src={LogoTwitter} alt="Logo Twitter" />
                          <IconesRedesSociais src={LogoFace} alt="Logo Facebook" />
                          <IconesRedesSociais src={LogoInstagram} alt="Logo Instagram" />
                        </RedesSociais>
                    </FundoRodape>
            </TelaToda>
        );
    }
}
export default Rodape