import React from "react";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import amber from '@material-ui/core/colors/amber';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from "styled-components"
import Cabecalho from './Header'
import Rodape from './Footer'
import axios from 'axios'
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const TelaToda = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #fff8e1;
    color: #363636;
`
const ConteudoPrincipal = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const PerfilVendedor = styled.section`
    width: 100vw;
    height: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffe082;
`
const ImageProfile = styled.img`
    border-radius:50%;
    width: 8vw;
`
const TextProfile = styled.div `
    display:flex;
    flex-direction: column;    
    margin-left: 5vw;
`
const TextProfileh2 = styled.h2 `
    margin: 0;
    padding: 0;
    color: white;
    font-weight: bold;
    color: #363636;
`
const TextProfileP = styled.p `
    color: wheat;
    margin: 0;
    padding: 0;
    color: #363636;
`
const ConteinerForm = styled.div` 
    min-height: 85vh;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
    width:60vw;
`
const ContainerInputName = styled.div`
    width: 30vw;
    display: flex;
`

const InputName = styled(TextField)`
    flex-basis: 100%
`

const ContainerInputCategoria = styled.div`
`
const InputCategoria = styled(TextField)`
`

const ContainerInputPagamento = styled.div`
`
const InputPagamento = styled(TextField)`
`
const ContainerInputParcelas = styled.div`
`
const InputParcelas = styled(TextField)`
`
const ContainerInputPreco = styled.div`
`
const InputPreco = styled(TextField)`
`
const ContainerTextArea = styled.div `
`
const InputTextArea = styled(TextField)`
`
const MyTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffa000'
        },
        secondary: amber['A900']
    }
});

const categorias = [
    {
        value: 'acessorios',
        label: 'Acessórios',
    },
    {
        value: 'convites',
        label: 'Convites',
    },
    {
        value: 'decoracao',
        label: 'Decoração',
    },
    {
        value: 'eco',
        label: 'Eco',
    },
    {
        value: 'pets',
        label: 'Pet',
    },
    {
        value: 'roupa',
        label: 'Roupas',
    },    
];

const numParcelas = [
    {
        value: '1',
        label: '1x',
    },
    {
        value: '2',
        label: '2x',
    },
    {
        value: '3',
        label: '3x',
    },
    {
        value: '4',
        label: '4x',
    },
    {
        value: '5',
        label: '5x',
    },
    {
        value: '6',
        label: '6x',
    },
    {
        value: '7',
        label: '7x',
    },
    {
        value: '8',
        label: '8x',
    },
    {
        value: '9',
        label: '9x',
    },
    {
        value: '10',
        label: '10x',
    },
    {
        value: '11',
        label: '11x',
    },
    {
        value: '12',
        label: '12x',
    },
];
class AdicionaProduto extends React.Component {
    state = {
        valueName: '',
        valueDescription: '',
        valuePrice: '',
        valuePaymentMethod: '',
        valueCategory: '',
        valuePhotos: '',
        valueInstallments: '',
    };

    mudaNome = () => event => {
        this.setState({ valueName: event.target.value });
    };

    mudaDescricao = () => event => {
        this.setState({ valueDescription: event.target.value });
    };

    mudaValor = () => event => {
        this.setState({ valuePrice: event.target.value });
    };
    
    mudaPagamento = () => event => {
        this.setState({ valuePaymentMethod: event.target.value });
    };
    
    mudaCategoria = () => event => {
        this.setState({ valueCategory: event.target.value });
    };
    
    mudaFotos = () => event => {
        this.setState({ valuePhotos: event.target.value });
    };
    
    mudaParcelas = () => event => {
        this.setState({ valueInstallments: event.target.value });
    };

    sendData = () => {
        const dataToSend = {
            name: this.state.valueName,
            description: this.state.valueDescription,
            price: this.state.valuePrice,
            paymentMethod: this.state.valuePaymentMethod,
            category: this.state.value.valueCategory,
            photos: this.state.value.valuePhotos,
            installments: this.state.valueInstallments
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products", dataToSend,
            {
                headers: {
                    ContentType: 'application/json'
                }
            })
            .then(resposta => {
                console.log("UHUL DEU CERTO!!!!!", resposta)
            })
            .catch(error => {
                console.log("DEU ERRO", error)
            });
    };
    
    render() {
        const { classes } = this.props;
        
        return (
                <TelaToda>
                    <MuiThemeProvider theme={MyTheme}>
                        <Cabecalho />
                        
                        <ConteudoPrincipal>
                            <PerfilVendedor>
                                <ImageProfile src={'https://i1.wp.com/arteref.com/wp-content/uploads/2019/04/dara-1.jpg?fit=900%2C700&ssl=1'} alt="FotoVendedor" />
                                <TextProfile>
                                    <TextProfileh2>Vendedor SlackBot</TextProfileh2>
                                    <TextProfileP>Você possui 10 produtos cadastrados</TextProfileP>
                                    <TextProfileP> Sua reputação atual é ⭐9, 8 </TextProfileP> 
                                </TextProfile>
                            </PerfilVendedor>

                            <ConteinerForm>
                                <ContainerInputName>
                                    <InputName
                                      id="standard-dense"
                                      label="Título do Produto"
                                      className={classNames(classes.textField, classes.dense)}
                                      margin="dense"
                                      onChange={this.mudaNome()}
                                    />
                                </ContainerInputName>    
                            </ConteinerForm>
                        </ConteudoPrincipal>

                        <Rodape />
                                
                    </MuiThemeProvider>
                </TelaToda>
        );
    }
}

AdicionaProduto.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdicionaProduto);
