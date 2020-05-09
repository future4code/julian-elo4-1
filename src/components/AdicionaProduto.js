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

const ConteudoPrincipal = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    min-height: 90vh;
`
const CabecalhoPerfil = styled.div`
    width:100vw;
    background-color:orange;
    height:15vh;
    display:flex;
    align-items:center;
`
const CardProfile = styled.div`
    display:flex;
    align-items:center;
    padding:10px 0 10px 15vw;
`
const CardImageProfile = styled.div`     
`
const ImageProfile = styled.img`
    border-radius:50%;
`
const TextProfile = styled.div`
    display:flex;
    flex-direction: column;    
    margin-left: 10px;
`
const TextProfileh2 = styled.h2`
    margin: 0;
    padding: 0;
    color: white;
`
const TextProfileP = styled.p`
    color: wheat;
    margin: 0;
    padding: 0;
`
/* Estilo Formulario */
const ConteinerForm = styled.div`
    height: 85vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    width:600px;
    
`
const ContainerInputName = styled.div`
    width: 400px;
`

const InputName = styled(TextField)`
    width: 400px;
`

const ContainerInputCategoria = styled.div`
    width: 400px;

`
const InputCategoria = styled(TextField)`
    width: 400px;
`

const ContainerInputPagamento = styled.div`
    width: 400px;

`
const InputPagamento = styled(TextField)`
    width: 400px;
`
const ContainerInputParcelas = styled.div`
    width: 400px;
`
const InputParcelas = styled(TextField)`
    width: 400px;
`
const ContainerInputPreco = styled.div`
    width: 400px;
`
const InputPreco = styled(TextField)`
    width: 400px;
`
const MyTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffa000'
        },
        secondary: amber['A900']
    }
})
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

const ContainerTextArea = styled.div`
    width: 400px;

`
const InputTextArea = styled(TextField)`
    width: 400px;

`

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

    handleChange = (name) => event => {
        this.setState({ [name]: event.target.value });
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
                <MuiThemeProvider theme={MyTheme}>
                    <Cabecalho />
                        <CardProfile>
                            <CardImageProfile>
                                <ImageProfile src="https://picsum.photos/70/70" alt="Minha Figura"/>	
                            </CardImageProfile>
                            <TextProfile>
                                <TextProfileh2>Vendedor SlackBot</TextProfileh2>
                                <TextProfileP>10 produtos cadastrados.</TextProfileP>
                            </TextProfile>
                        </CardProfile>
                    <ConteinerForm>
                                
                        <ContainerInputName>
                            <InputName 
                                value={this.state.valueName} 
                                Onchange={this.handleChange('valueName')} 
                                required id="standard-required" 
                                label="Nome do Produto" 
                                defaultValue="" />
                        </ContainerInputName>
    
                        <ContainerInputCategoria>
                            <InputCategoria
                                id="standard-select-currency"
                                select
                                label="Categoria do Produto"
                                className={classes.textField}
                                value={this.state.valueCategory}
                                onChange={this.handleChange('valueCategory')}
                                SelectProps={{
                                  MenuProps: {
                                    className: classes.menu,
                                  },
                                }}
                                margin="normal"
                            >
                                {categorias.map(option => (
                                  <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                  </MenuItem>
                                ))}
                            </InputCategoria>
                        </ContainerInputCategoria>
    
                        <ContainerInputPagamento>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Forma de Pagamento</FormLabel>
                                <RadioGroup
                                    aria-label="Forma de Pagamento"
                                    name="gender1"
                                    className={classes.group}
                                    value={this.state.valuePaymentMethod}
                                    onChange={this.handleChange('valuePaymentMethod')}
                                >
                                    <FormControlLabel value="boleto" control={<Radio />} label="Boleto" />
                                    <FormControlLabel value="card" control={<Radio />} label="Cartão" />
                                </RadioGroup>
                            </FormControl>
                        </ContainerInputPagamento>
    
                        <ContainerInputParcelas>
                            <InputCategoria
                                id="standard-select-parcelas"
                                select
                                label="Número de Parcelas"
                                className={classes.textField}
                                value={this.state.valueInstallments}
                                onChange={this.handleChange('valueInstallments')}
                                SelectProps={{
                                  MenuProps: {
                                    className: classes.menu,
                                  },
                                }}
                                margin="normal"
                            >
                                {numParcelas.map(option => (
                                  <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                  </MenuItem>
                                ))}
                            </InputCategoria>
                        </ContainerInputParcelas>
    
                        <ContainerInputPreco>
                            <TextField
                                id="standard-number"
                                label="Number"
                                value={this.state.valuePrice}
                                type="number"
                                className={classes.textField}
                                Onchange={this.handleChange('valuePrice')}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                }}
                            />
                        </ContainerInputPreco>
    
                        <ContainerTextArea>
                            <InputTextArea
                                label="Descrição"
                                id="filled-size-small"
                                size="normal"
                                rows="5"
                                multiline="100"
                                Onchange={this.handleChange('valueDescription')}
                                value={this.state.valueDescription}
                            />
                        </ContainerTextArea>
    
                        <Button OnClick={this.sendData} color="primary">Cadastrar Produto</Button>
    
                    </ConteinerForm>
                    <Rodape />
                </MuiThemeProvider>
        );
    }
}

AdicionaProduto.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdicionaProduto);
