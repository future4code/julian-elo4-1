import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import styled from 'styled-components'
import classNames from 'classnames';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const FundoRodape = styled.div`
    width: 100%;
    height: 30vh;
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
`
const FormasPag = styled.section`
`
const Certificados = styled.section`
`
const TituloPag = styled.h4`
`
const ImagemPag = styled.img`
`
const TextoPag = styled.p`
`
const RedesSociais = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
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
                    <FormContato></FormContato>
                    <FormasPag>
                        <TituloPag>MEIOS DE PAGAMENTO</TituloPag>
                        <FormasPag></FormasPag>
                        <TextoPag>Parcelamos em até 12x no cartão de crédito</TextoPag>
                    </FormasPag>
                    <Certificados></Certificados>
                </Informacoes>
                <RedesSociais></RedesSociais>
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