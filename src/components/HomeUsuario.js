import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import styled from 'styled-components'
import Rodape from './Footer'
import Cabecalho from './Header'
import classNames from 'classnames';
import amber from '@material-ui/core/colors/amber';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconFilter from '@material-ui/icons/Tune';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import red from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button'
import MaisIcon from '@material-ui/icons/Add'
import axios from 'axios'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import ZoomMais from '@material-ui/icons/ZoomIn';
import ZoomMenos from '@material-ui/icons/ZoomOut';
import Promocional from '../img/promo.png'
import { DetalheProduto } from './DetalheProduto.js'

const TelaToda = styled.div `
    margin:0;
    padding:0;
`
const Container = styled.section`
    min-height: 80vh;
    color: #ff6f00;
    background-color: #fff8e1;
    display: flex;
    
`
const PromocaoSite = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end; 
`
const MaisZoom = styled(ZoomMais)`
    cursor: pointer;
    &&{
        font-size: 2.5vw;
        color: #363636;
    }
`

const MenosZoom = styled(ZoomMenos)`
    cursor: pointer;
    &&{
        font-size: 2.5vw;
        color: #363636;
    }
`
const ContainerZoom = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const QuadradoImg = styled.div`
    height: 15vw;
    width: 15vw;
    position: relative;
    overflow: hidden;
`
const FotoProduto = styled.img `
    width: 20vw;
    position: absolute;
    left: -20%;
    top: 0%;
 
`
const Navegaçao =styled.nav`
    max-height: 80vh;
    border-bottom: 2px solid #ffe082;
    border-right: 2px solid #ffe082;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1vw 0.5vw;
    width: 15vw;
`
const TituloNavegacao = styled.p`
    color: #363636;;
    font-weight: bold;
    font-size: 2vw;
`
const Categorias = styled.p`
    color: #363636;
    font-size: 1.5vw;
`
const ConteudoPrincipal = styled.div`
    color: #ff6f00;
    background-color: #fff8e1;
    padding: 2vw;
`
const SuperiorProdutos = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
`
const Mostruario = styled.div`
    width: 80vw;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr; 
    margin-top: 4vw;
`
const Cupom1 = styled.img`
    width: 25vw; 
`
const Cupom2 = styled.img `
    width: 40vw; 
`
const Filtros = styled.section`
`
const BotaoMaisDetalhes = styled(Button)`
    font-size: 1vw;
    width: 10vw;
    height: 2.5vw;
    font-size: 1vw;
    display: flex;
    justify-content: space-around;
`
const InputFiltro = styled(TextField)`
    &&{
        background-color: rgba(255, 143, 0, 0.2);
        border-radius: 10px 10px 0 0;
    }
`
const InputSelect = styled(FormControl)`
    &&{
        background-color: rgba(255, 143, 0, 0.2);
        border-radius: 10px 10px 0 0;
    }
`
const IconeFiltro = styled(IconFilter)`
    font-size: 3vw;
`

const InferiorProdutos = styled.div `
    display: flex;
    flex-direction:column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
`
const LegendaProdutos = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: flex-start;
`
const TituloFiltros = styled.p`
    color: #363636;
    font-size: 2vw;
    font-weight: bold;
`
const PrecoProduto = styled.p`
    margin: 0.5vw;
    font-size:1vw;
    color: #363636;
`
const TituloProduto = styled.p`
    margin: 0.5vw 0 0 0.5vw;
    font-size:1vw;
    color: #363636;
    font-weight: bold;

`

const Form = styled.div`
        display: flex;
        flex-wrap: nowrap;
`
const Parametros = styled.section `
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
`
const CardProduto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5vw;
    margin-bottom: 1vw;
    box-shadow:-1px 2px 5px 0px rgba(50, 50, 50, 0.75);
    padding: 0.4vw;
    width: 18vw;
    min-height: 20vw;
        transition: all 0.5s ease;
    :hover{ 
        transform: scale(1.08)
    }
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
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    label: {
        marginLeft: "2vw"
    }
});

const MyTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffa000'
        },
        secondary: amber['A900'],
        tertiary: amber['A600'],
        quaternary: amber['A200'],
        quinary: amber['A50'],
    }
})

class HomeUsuario extends React.Component {
    state = {
        detalheProduto: {},
        paginaAtual: 'PRODUTOS',
        valorMaximo: '',
        valorMinimo: '',
        open: false,
        ordem: '',
        isZoom: false,
        produtos: [
            {
                "description": "Pijama cirúrgico em tecido 1025% algodão de alta qualidade. O conjunto é composto por duas peças: uma calça comprida de corte reto; e uma camisa de mangas curtas, gola V arredondada, modelagem ajustada ao corpo e dois bolsos. Os dois bolsos básicos são perfeitos para o transporte de pequenos objetos que devem estar sempre a mão. proporcionando boa respirabilidade à pele e flexibilidade. têm caimento perfeito e garantem bem-estar ao longo de todo o dia.",
                "paymentMethod": "boleto",
                "photos": [
                    "https://img.elo7.com.br/product/main/2BE1B1F/pijama-cirurgico-pijama-clinica.jpg"
                ],
                "name": "Conjunto Pijama cirúrgico",
                "installments": 1,
                "category": "Roupas",
                "price": 63,
                "id": "2TWgQiHebGHU3kKINgVg"
            },
            {
                "name": "Máscara Anatômica ",
                "installments": 3,
                "category": "Artesanato",
                "price": 10,
                "description": "Tecido tricoline forrado. Com a estampa que você desejar",
                "paymentMethod": "card",
                "photos": [
                    "https://img.elo7.com.br/product/main/2EAB3F2/mascara-anatomico.jpg"
                ],
                "id": "4jRKNvfg9paoRQw3qPk2"
            },
            {
                "installments": 3,
                "category": "Eco",
                "price": 25,
                "description": "Kit com 30 suculentas para casamento, aniversario, eventos em geral. Cachepot personalizável (copinhos de papel) - O cliente pode mudar a cor do papel e arte.",
                "paymentMethod": "card",
                "photos": [
                    "https://img.elo7.com.br/product/main/1AB84BF/plantinhas-suculentas-para-casamentos-sao-paulo-cactos.jpg"
                ],
                "name": "Plantinhas Suculentas para Casamentos",
                "id": "4z0TjSD2ElU4wqdYe96S"
            },
            {
                "name": "CADERNETA DE VACINA PET",
                "installments": 3,
                "category": "Pets",
                "price": 46,
                "description": "40 Paginas compostas por : Dados do seu pet, acompanhamento, anotações gerais, visitas ao Veterinario, carteira de vascinação, vermifugo (Controle de Parasitário), intercorrencias ( internações, Banho e tosa) e melhores Momentos( Espaço para fotos).",
                "paymentMethod": "boleto",
                "photos": [
                    "https://img.elo7.com.br/product/main/291DB0F/caderneta-de-vacina-pet-dog.jpg"
                ],
                "id": "7zNRXgTr5DEckZroa4K3"
            },
            {
                "installments": 1,
                "category": "Decoração",
                "price": 25,
                "description": "Kit com 150 unidades Petalas de Rosa VERMELHA Artificial (tecido)",
                "paymentMethod": "boleto",
                "photos": [
                    "https://img.elo7.com.br/product/main/1BFE7F5/petalas-de-rosa-vermelha-150-unds-noiva.jpg"
                ],
                "name": "Pétalas de Rosas vermelhas",
                "id": "BPCvGZxQIb5eSgnde2RB"
            },
            {
                "description": "Luminária personalizada com foto, para eternizar aquele momento especial com uma peça surpreendente...",
                "paymentMethod": "card",
                "photos": [
                    "https://img.elo7.com.br/product/main/2C0A7BB/luminaria-foto-iluminada.jpg"
                ],
                "name": "LUMINÁRIA - FOTO ILUMINADA",
                "installments": 3,
                "category": "Decoração",
                "price": 120,
                "id": "JmtX1h8Ry1qt2xLpz8SB"
            },
            {
                "description": "CAMA PET PARA GATOS. FEITO EM MDF COM CORTE A LASER, MEDIDA INTERNA DE 35X30 E MEDIDA TOTAL EXTERNA 40X40X35",
                "paymentMethod": "card",
                "photos": [
                    "https://img.elo7.com.br/product/zoom/24A218F/cama-pet-camapet.jpg"
                ],
                "name": "Cama PET Com Almofada",
                "installments": 2,
                "category": "Pets",
                "price": 80,
                "id": "LarOgeITQzeioknUzuGa"
            },
            {
                "category": "Eco",
                "price": 45,
                "description": "Ecobag algodão cru ecológico 30 cm de largura e x 35 cm de altura ( tecido bege claro) 170 * de gramatura + transfer (arte/impressão, colorida ) 14 x 20.",
                "paymentMethod": "card",
                "photos": [
                    "https://img.elo7.com.br/product/main/1845DAA/sacola-ecobag-40x45-personalizada-sacola-personalizada-de-algodao.jpg"
                ],
                "name": "Sacola ecobag 30x35 personalizada",
                "installments": 3,
                "id": "SDaLAhpGiS2TL9puxQBw"
            },
            {
                "paymentMethod": "card",
                "photos": [
                    "https://img.elo7.com.br/product/main/22F7CAA/capa-manto-grifinoria-gravata-varinha-harry-potter.jpg"
                ],
                "name": "Capa / Manto Grifinória + Gravata + Varinha - Harry Potter",
                "installments": 5,
                "category": "Roupas",
                "price": 180,
                "description": "O kit contém: 1 Capa da casa Grifinória, semi forrada. Super confortável + 1 Gravata Grifinória + 1 Varinha a sua escolha (Temos a do Harry, Hermione, Dumbledore e Voldemort).",
                "id": "YnjB55hYq8ZufdnPGfYT"
            },
            {
                "category": "Convite",
                "price": 55,
                "description": "Kit com 30 convites. Papel: Off Set 180g e Gramatura: 180 gramas.",
                "paymentMethod": "card",
                "photos": [
                    "https://img.elo7.com.br/product/zoom/21F84DB/convite-de-casamento.jpg"
                ],
                "name": "Convite de casamento",
                "installments": 3,
                "id": "aNUsALox7v0ipvdgHuoy"
            },
            {
                "installments": 4,
                "category": "Convite",
                "price": 2,
                "description": "Valor Unitário. Essa caixa convite mede, aproximadamente, 11,00 cm de largura + 4,00 cm de altura + 10,00 cm de comprimento.Cabem 2 chocolates tipo Ferrero Rocher (não inclusos) e as caixas são produzidas em papel especial branco de alta gramatura.",
                "paymentMethod": "card",
                "photos": [
                    "https://img.elo7.com.br/product/zoom/1DF9D46/convite-para-padrinhos-convite-de-casamento.jpg"
                ],
                "name": "Convite para Padrinhos",
                "id": "cUZZa8QSw3bEX6mzQB1n"
            },
            {
                "name": "Porta Tiara Expositor Organizador",
                "installments": 1,
                "category": "Artesanato",
                "price": 110,
                "description": "Kit com 2 porta tiaras expositor organizador em acrílico. Com ele as tiaras ficam todas visíveis e em ordem.",
                "paymentMethod": "boleto",
                "photos": [
                    "https://img.elo7.com.br/product/main/1DDD786/porta-tiara-expositor-suporte-organizador-em-acrilico-2-un-arcos.jpg"
                ],
                "id": "sBpNeeJIspTTaxC4Pubk"
            }
        ],
    };

     handleChangeOrdem = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleChangeValor = name => event => {
    this.setState({ [name]: Number(event.target.value) });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  aumentaImagem =() =>{
    console.log('funcionou+')
    this.setState({isZoom: !this.state.isZoom})
  }
  
  diminuiImagem =() =>{
    console.log('funcionou-')
    this.setState({isZoom: !this.state.isZoom})
  }
  
  handleClose = () => {
    this.setState({ open: false });
  };


    onClickMaisDetalhes = (idProduto) => {
        const produtoEspecifico = this.state.produtos.filter((item) => {
            return idProduto === item.id
        })

        this.setState({ 
            paginaAtual: this.state.paginaAtual === 'PRODUTOS' ? 'DETALHES' : 'PRODUTOS',
            detalheProduto: produtoEspecifico
        })
    }

    render() {
         const { classes } = this.props;
  
  let cupomAparecendo: ''

  switch (this.state.isZoom) {
    case false:
      cupomAparecendo =(<Cupom1 src={Promocional} alt='Código Promocional'/>)
      break;
    case true:
      cupomAparecendo =(<Cupom2 src={Promocional} alt='Código Promocional'/>)
      break;
    default:
        break;
    
  }
   
  const produtosSite = this.state.produtos.map((produto) => {
    return <CardProduto>
        <QuadradoImg>
            <FotoProduto src={produto.photos} alt='Foto do Produto'/></QuadradoImg>
        <InferiorProdutos>
            <LegendaProdutos>
                <TituloProduto>{produto.name}</TituloProduto>
                <PrecoProduto> R$ {produto.price},00 </PrecoProduto>
            </LegendaProdutos>
            <BotaoMaisDetalhes
                variant="contained"
                color="primary"
                aria-label="Add"
                className={classes.margin}
            >
                <MaisIcon className={classes.extendedIcon} />
                Detalhes
            </BotaoMaisDetalhes>
        </InferiorProdutos>
        </CardProduto>
}); 

        if (this.state.paginaAtual === 'PRODUTOS') {
            return (
                <TelaToda>
        <MuiThemeProvider theme={MyTheme}>
            <Cabecalho />
            <Container>
                <Navegaçao>
                    <TituloNavegacao>Categorias</TituloNavegacao>
                    <Categorias>Acessórios</Categorias>
                    <Categorias>Convites</Categorias>
                    <Categorias>Decoração</Categorias>
                    <Categorias>Eco</Categorias>
                    <Categorias>Pets</Categorias>
                    <Categorias>Roupas</Categorias>
                </Navegaçao>
    
                <ConteudoPrincipal>
                    <SuperiorProdutos>
                        <PromocaoSite>
                            <div>
                                {cupomAparecendo}
                            </div>
                            <ContainerZoom>
                                <MaisZoom onClick={this.aumentaImagem}/>
                                <MenosZoom onClick={this.diminuiImagem}/>
                            </ContainerZoom>
                        </PromocaoSite>
                        <Filtros>
                            <Button onClick = {this.handleClickOpen} >
                                <IconeFiltro />&nbsp;
                                <TituloFiltros>&nbsp; Filtros</TituloFiltros>
                            </Button>
                            <Button onClick={this.handleClickOpen}></Button>
                            <Dialog
                              disableBackdropClick
                              disableEscapeKeyDown
                              open={this.state.open}
                              onClose={this.handleClose}
                            >
                              <DialogTitle>Escolha os Filtros</DialogTitle>
                              <DialogContent>
                                <Form>                                    
                                    <InputFiltro
                                        id="inputMaximo"
                                        className={classNames(classes.margin, classes.textField)}
                                        variant="filled"
                                        color="primary"
                                        label="Valor Máximo"
                                        value={this.state.valorMaximo}
                                        onChange={this.handleChangeValor('valorMaximo')}
                                        InputProps={{
                                          endAdornment: <InputAdornment position="end">R$</InputAdornment>,
                                        }}
                                    />
                                    <InputFiltro
                                        id="inputMinimo"
                                        className={classNames(classes.margin, classes.textField)}
                                        color="primary"
                                        variant="filled"
                                        label="Valor Mínimo"
                                        value={this.state.valorMinimo}
                                        onChange={this.handleChangeValor('valorMinimo')}
                                        InputProps={{
                                          endAdornment: <InputAdornment position="end">R$</InputAdornment>,
                                        }}
                                    />
                                    
                                  
                                    <InputSelect className={classes.formControl}>
                                        <InputLabel className={classes.label}>Ordem Preço</InputLabel>
                                        <Select
                                          native
                                          value={this.state.ordem}
                                          onChange={this.handleChangeOrdem('ordem')}
                                          input={<FilledInput name="ordem" id="filled-ordem-native-simple" />}
                                        >
                                          <option value=""></option>
                                          <option value="crecente">Crescente</option>
                                          <option value="decrecente">Decrescente</option>
                                        </Select>
                                  </InputSelect>
                                </Form>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                  Cancel
                                </Button>
                                <Button onClick={this.handleClose} color="primary">
                                  Ok
                                </Button>
                              </DialogActions>
                            </Dialog>
                            
                        </Filtros>
                    </SuperiorProdutos>
                    
                    <Mostruario>
                        {produtosSite}
                    </Mostruario>
                </ConteudoPrincipal>
            </Container>
            <Rodape />
        </MuiThemeProvider>
    </TelaToda>
)
        } else {
            return <DetalheProduto Produto={this.state.detalheProduto}/>
        }
    }
}

HomeUsuario.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeUsuario);