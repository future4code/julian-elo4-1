import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import styled from 'styled-components'
import Logo from '../img/logocomfundo.png'

import classNames from 'classnames';
import PropTypes from 'prop-types';
import amber from '@material-ui/core/colors/amber';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconProcurar from '@material-ui/icons/Search';
import IconCarrinho from '@material-ui/icons/ShoppingCart'
import IconFavorito from '@material-ui/icons/Favorite'
import IconPerfil from '@material-ui/icons/Person'
import IconSair from '@material-ui/icons/ExitToApp'

const TelaToda = styled.div `
    margin:0;
    padding:0;
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
const ContainerIcone = styled.section `
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
    palette:{
        primary: {
            main: '#ff8f00'
        },
        secondary: {
            main: '#fff8e1'
        }
    }
})
class Cabecalho extends React.Component {
    state = {
        amount: '',
        procurar: '',
        showProcurar: false,
        open: false,
        age: '',
    };

    handleChangePesquisar = prop => event => {
      this.setState({ [prop]: event.target.value });
    };  

    render(){
    const { classes } = this.props;

        return (
          <TelaToda>
              <MuiThemeProvider theme={MyTheme}>
                  <FundoCabecalho>
                    <LogoElo src={Logo} alt='Logo'/>
                        <ContainerPesquisa>
                            <InputPesquisar
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
                                    <Procurar />
                                  </InputAdornment>
                                ),
                              }}
                            />
                        </ContainerPesquisa>
                      
                    <Icones>
                        <ContainerIcone>
                          <IconeCarrinho />
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
              </MuiThemeProvider>
          </TelaToda>
        );
    }     
}

Cabecalho.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cabecalho);
