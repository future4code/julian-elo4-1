import React, { Component } from 'react'
import HomeUsuario from './HomeUsuario'
import styled from 'styled-components';
import FundoAmarelo from '../img/fundoamarelo.jpg';
import Elo4 from '../img/logo.png'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import amber from '@material-ui/core/colors/amber';


const TemaBoasVindas = createMuiTheme({
  palette: {
    primary:{
      main: "#ffa000"
    },
    secondary: amber['A900']
  }
})

const Fundo = styled.div`
background-image: url(${FundoAmarelo});
`;

const Botaoescolha = styled(Button)`
  width: 300px;
  height: 110px;
  font-size: 30px;
  border-radius: 30px;
  border-color: orangered;
  background: none;
  color: black;
  `
const Botoeshome = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 50vw;
`
const Bemvindo = styled.h2`
color: white;
font-size: 4em;
margin-top: 100px;
text-shadow: 5px 4px 6px rgba(109,56,13,0.69);
`

const Bemvindo2 = styled.h3`
color: white;
font-size: 3em;
text-shadow: 5px 4px 6px rgba(109,56,13,0.69);
`

const Bemvindo3 = styled.h1`
color: white;
font-size: 50px;
text-shadow: 5px 4px 6px rgba(109,56,13,0.69);
`

const Imagemelo4 = styled.div`
display: flex;
padding:3vw;
background-color: rgba(242, 151, 11, 0.4);
justify-content:space-between;
height: 40vh;
`

const Frasesheader = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 28vw;
`

const Frasesbody = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 55vh;
width: 100vw;
`

export class AppContainer extends Component {

  
  render() {
    return (
      <MuiThemeProvider theme={TemaBoasVindas}>    

      <Fundo>

        <Imagemelo4>
          <img src={Elo4} alt="simbolo elo4" />
          <Frasesheader>
            <Bemvindo>Seja Bem Vindo ao elo4!</Bemvindo>
            <Bemvindo2>Personalizacao a sua mao</Bemvindo2>
          </Frasesheader>
        </Imagemelo4>
        <Frasesbody>
          <Bemvindo3>O QUER DESEJA FAZER HOJE?</Bemvindo3>
          <Botoeshome>

            <Botaoescolha variant="outlined" color="primary">Quero comprar</Botaoescolha>
            <Botaoescolha variant="outlined" color="primary">Quero vender</Botaoescolha>

          </Botoeshome>
        </Frasesbody>

      </Fundo>

      </MuiThemeProvider>
    )
  }
}

