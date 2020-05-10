import React, { Component } from 'react'
import Usuario from './Usuario'
import styled from 'styled-components';
import FundoAmarelo from '../img/fundoamarelo.jpg';
import Elo4 from '../img/logo.png'
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import amber from '@material-ui/core/colors/amber';
import Vendedor from './Vendedor'


const TemaBoasVindas = createMuiTheme({
  palette: {
    primary:{
      main: "#ffa000"
    },
    secondary: amber['A900']
  }
})

const Fundo = styled.div`
  background-image: url("${FundoAmarelo}");
  background-color: #cccccc;
  height: 100vh;
  img {
    width: 7vw;
  }
`

const Botaoescolha = styled(Button)`
  width: 300px;
  height: 110px;
  font-size: 30px;
  border-radius: 30px;
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
  font-size: 4vw;
  text-shadow: 5px 4px 6px rgba(109,56,13,0.69);
`

const Bemvindo2 = styled.h3`
  color: white;
  font-size: 3vw;
  text-shadow: 5px 4px 6px rgba(109,56,13,0.69);
`

const Bemvindo3 = styled.h1`
  color: white;
  font-size: 3vw;
  text-shadow: 5px 4px 6px rgba(109,56,13,0.69);
`

const ContainerHeader = styled.div`
  display: flex;
  padding:3vw;
  background-color: rgba(242, 151, 11, 0.4);
  justify-content:space-between;
  align-items: center;
  height: 45vh;
`

const Frasesheader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 25vw;
`
const LogoElo = styled.img`
  height: 17vw;
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
  state = {
    paginaMostrada: 'boasVindas'    
  }

  mostraUsuario = () => {
    this.setState({ paginaMostrada: 'usuario'})
  }

  mostraVendedor = () => {
    this.setState({ paginaMostrada: 'vendedor'})
  }

  render() {
    
    if(this.state.paginaMostrada === 'boasVindas'){
      return (
        <MuiThemeProvider theme={TemaBoasVindas}>     
  
          <Fundo>
        
            <ContainerHeader>
              <LogoElo src={Elo4} alt="simbolo elo4" />
            
              <Frasesheader>
                <Bemvindo>Seja Bem Vindo ao elo4!</Bemvindo>
                <Bemvindo2>Personalizacao a sua mao</Bemvindo2>
              </Frasesheader>
            </ContainerHeader>

            <Frasesbody>
              <Bemvindo3>O QUER DESEJA FAZER HOJE?</Bemvindo3>

              <Botoeshome>

                <Botaoescolha onClick={this.mostraUsuario} variant="outlined" color="primary">Quero comprar</Botaoescolha>
                <Botaoescolha onClick={this.mostraVendedor} variant="outlined" color="primary">Quero vender</Botaoescolha>
                <Botaoescolha onClick={this.mostraCarrinho} variant="outlined" color="primary">Carrinho</Botaoescolha>
              </Botoeshome>
            </Frasesbody>

          </Fundo>

        </MuiThemeProvider>
      )
    } else if (this.state.paginaMostrada === 'usuario'){
      return(
        <Usuario />
      )
    } else{
      return(
        <Vendedor />
      )
    }    
  }
}