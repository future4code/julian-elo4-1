import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
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
`
const TituloPag = styled.h4`
`
const ImagemPag = styled.img`
    width: 20vw;
`
const TituloSeguranca = styled.div`

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
const TelaToda = styled.div `
    margin:0;
    padding:0;
`
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'centers',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    textField: {
        flexBasis: 200,
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
            color: red[800],
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
  },
});

const MyTheme = createMuiTheme({
    palette:{
        primary: {
            main: '#ffa000'
        },
        secondary: {
            main:'#363636'
        }
    }
})
class Rodape extends React.Component {
  

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render(){
  const { classes } = this.props;
  
  return (
    <TelaToda>
        <MuiThemeProvider theme={MyTheme}>
            <FundoRodape>
                <Informacoes>
                    <FormContato>
                        <h3>Entre em contato com a gente:</h3>
                        <p>Nome:</p><InputContato type="text" name="nome" placeholder="Insira seu nome"></InputContato>
                        <p>Email:</p><InputContato type="email" name="email" placeholder="Insira seu email"></InputContato>
                        <p>Mensagem:</p><InputContato type="text" name="mensagem" placeholder="Insira seu sua mensagem"></InputContato> 
                        <BotaoEnviarContato>Enviar</BotaoEnviarContato>                      
                    </FormContato>
                    <FormasPag>
                        <ImagemPag src={Pagamentos} alt={'Forma de Pagamentos'} />
                    </FormasPag>
                    <Certificados>Bernardo e muito bonito</Certificados>
                </Informacoes>
                <RedesSociais>
                    <img src={LogoTwitter} alt="Logo Twitter" />
                    <img src={LogoFace} alt="Logo Facebook" />
                    <img src={LogoInstagram} alt="Logo Instagram" />
                </RedesSociais>
                <TituloSeguranca>
                    <img src={LogoSeg1} alt="Logo de Segurança 1" />
                    <img src={LogoSeg2} alt="Logo de Segurança 2" />
                </TituloSeguranca>
            </FundoRodape>
        </MuiThemeProvider>
    </TelaToda>
  );
  }     
}

Rodape.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Rodape);