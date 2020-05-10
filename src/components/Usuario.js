import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import styled from 'styled-components'
import Logo from '../img/logocomfundo.png'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconProcurar from '@material-ui/icons/Search';
import IconCarrinho from '@material-ui/icons/ShoppingCart'
import IconFavorito from '@material-ui/icons/Favorite'
import IconPerfil from '@material-ui/icons/Person'
import IconSair from '@material-ui/icons/ExitToApp'
import Pagamentos from "../img/pag.png";
import LogoTwitter from "../img/twitter.png";
import LogoFace from "../img/facebook.png";
import LogoInstagram from "../img/instagram.png";
import LogoSeg1 from "../img/seguranca1.png";
import LogoSeg2 from "../img/seguranca2.png";
import Button from "@material-ui/core/Button";
import Produtos from './PaginasUsuario/Produtos'
import Carrinho from './PaginasUsuario/Carrinho'
import Vendedor from './Vendedor.js'
import { BoasVindas } from './BoasVindas.js'

const Desenvolvedores = styled.div`
`
const Fontes = styled.p`
font-size: 1.5em;
font-family: 'Tekton pro';
`
const Rodape = styled.div`
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
  display: grid;  
  grid-template-columns: 1fr 1fr 2fr 1fr;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const FormContato = styled.section`
  margin-left: 4vw;
`;
const ImgCertificados = styled.img`
  
`
const FormasPag = styled.section`
  padding-right: 6vw ;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 25vw;
`
const IconesRedesSociais = styled.img`
  width: 40px;
  height: 40px;
  display:inline;
  margin-left:20px  ;
`
const Certificados = styled.section`
  margin-left: 2vw;
  width: 25vw; */
`
const TituloPag = styled.h4`
`
const ImagemPag = styled.img`
  width: 22vw;
  padding-left:5vw;
`
const DivInput = styled.div`
    padding-top: 5vh;
    padding-bottom: vh;
`
const TextContato = styled(TextField)`
  && {
    background-color: rgba(255, 248, 225, 0.5);
    border-radius: 10px 10px 0 0;
  }
  width: 16vw;
`
const BotaoEnviarContato = styled(Button)`
  width: 1.9;vw
  height: 1vh;
  font-size: 1em;
  border-radius: 30px;
  color: white;
`

const TextoPag = styled.p`
`
const RedesSociais = styled.section`
  margin-right: 4vw;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-left: -4vw;
`
const TelaToda = styled.div`
  margin: 0;
  padding: 0;
`
const ConteudoSite = styled.section`
`
const FundoCabecalho = styled.div`
    width: 100%;
    height: 20vh;
    background-color: #ff8f00;
    color: #fff8e1;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const LogoElo = styled.img`
  width: 6vw;
  transform: rotate(-90deg);
  margin-left: 6vw; 
  margin-right: 3vw;
  cursor: pointer;
`
const ContainerPesquisa = styled.div`
    display:flex;
    width: 40vw;
    justify-content: center;
    color: purple;
`
const InputPesquisar = styled(TextField)`
    flex-basis: 100%;
    &&{
        background-color: rgba(255, 248, 225, 0.5);
        border-radius: 10px 10px 0 0;
    }
`
const Procurar = styled(IconProcurar)`
    cursor: pointer;
    &&{
        color: #fff8e1;
    }
`
const Icones = styled.div`
    margin-right: 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 25vw;
`
const ContainerIcone = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const TituloItem = styled.p`
    color: amber.50;
    font-size: 1.3vw;
`
const IconeCarrinho = styled(IconCarrinho)`
    &&{
        font-size: 2.5vw;
    }
`
const IconeFavorito = styled(IconFavorito)`
    &&{
        font-size: 2.5vw;
    }
`
const IconePerfil = styled(IconPerfil)`
    &&{
        font-size: 2.5vw;
    }
`
const IconeSair = styled(IconSair)`
    &&{
        font-size: 2.5vw;
    }
`

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff8f00'
    },
    secondary: {
      main: '#fff8e1'
    }
  }
})
class Usuario extends React.Component {
  state = {
    detalheProduto: {},
    amount: '',
    procurar: '',
    showProcurar: false,
    open: false,
    age: '',
    paginaMostrada: this.props.MudaEstadoPagina
  };

  handleChangePesquisar = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  clicouPesquisar = () => {
    
  }

  voltarHome = () => {
    this.setState({paginaMostrada: 'home'})
  }

  pressionaEnter = (event) => {
    event.keyCode === 13 ? console.log('funcionou certinho') : console.log('x')
  }

  mostraCarrinho = () =>{
    this.setState({ paginaMostrada: 'carrinho' })
  }
  

  render() {
    const { classes } = this.props;
    let paginaMostrada;



    switch (this.state.paginaMostrada) {
      case 'carrinho':
        paginaMostrada = <Carrinho />;
        break;
      
      case 'vendedor':
        paginaMostrada = <Vendedor />
        break;
      
      default:
        paginaMostrada = <Produtos />
        break;
    }

    if (this.state.paginaMostrada === 'home') {
      return <BoasVindas />
    } else {
      return (
        <TelaToda>
          <MuiThemeProvider theme={MyTheme}>
            <FundoCabecalho>
              <LogoElo onClick={this.voltarHome} src={Logo} alt='Logo' />
  
              <ContainerPesquisa>
                <InputPesquisar
                  onKeyDown={this.pressionaEnter}
                  id="filled-adornment-procurar"
                  className={classNames(classes.margin, classes.textField, classes.label)}
                  variant="filled"
                  type={this.state.showProcurar ? 'text' : 'procurar'}
                  label="Procurar"
                  value={this.state.procurar}
                  onChange={this.handleChangePesquisar('procurar')}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Procurar onClick={this.clicouPesquisar} />
                      </InputAdornment>
                    ),
                  }}
                />
              </ContainerPesquisa>
  
              <Icones>
                <ContainerIcone>
                  <IconeCarrinho onClick={this.mostraCarrinho}/>
                  <TituloItem>Carrinho</TituloItem>
                </ContainerIcone>
                <ContainerIcone>
                  <IconeFavorito />
                  <TituloItem>Favoritos</TituloItem>
                </ContainerIcone>
                <ContainerIcone>
                  <IconePerfil />
                  <TituloItem>Meu Perfil</TituloItem>
                </ContainerIcone>
                <ContainerIcone>
                  <IconeSair />
                  <TituloItem>Sair</TituloItem>
                </ContainerIcone>
              </Icones>
            </FundoCabecalho>
  
            <ConteudoSite>
              {paginaMostrada}
            </ConteudoSite>
  
            <Rodape>
              <Informacoes>
                <FormContato>
                  <DivInput>
                    <TextContato
                      required
                      id="standard-required"
                      label="Nome"
                      defaultValue=""
                    />
                    <br />
                    <TextContato
                      required
                      id="standard-required"
                      label="Email"
                      defaultValue=""
                    />
                    <br />
                    <TextContato
                      label="Descrição"
                      id="filled-size-small"
                      size="normal"
                      rows="5"
                      multiline="100"
                      />
                      <BotaoEnviarContato variant="outlined" color="secondary">
                      Enviar
                    </BotaoEnviarContato>
                    

                  </DivInput>
                  
                </FormContato>
                <FormasPag>
                  <ImagemPag src={Pagamentos} alt={"Forma de Pagamentos"} />
                </FormasPag>
                <Certificados>
                     <ImgCertificados src={LogoSeg1} alt="Logo de Segurança 1" />
                     <ImgCertificados src={LogoSeg2} alt="Logo de Segurança 2" />
                    <br/>
                    <br/>
                     <IconesRedesSociais src={LogoTwitter} alt="Logo Twitter" />
                     <IconesRedesSociais src={LogoFace} alt="Logo Facebook" />
                     <IconesRedesSociais src={LogoInstagram} alt="Logo Instagram" />
                </Certificados>
                <Desenvolvedores>
                   <h2>Desenvolvedores</h2> 
                   <br/>
                  <Fontes>Wendel De Lima</Fontes>
                  <Fontes>Gislaine Costa</Fontes>
                  <Fontes>Raphael de Melo</Fontes>
                  <Fontes>Bernardo Arduini</Fontes>
                  <Fontes>Alex Trindade</Fontes>           
                  
                </Desenvolvedores>
              </Informacoes>
                  
          </Rodape>
          </MuiThemeProvider>
        </TelaToda>
      );
    }
  }
}

Usuario.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Usuario);

