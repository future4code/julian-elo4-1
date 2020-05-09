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
import Carrinho from './Carrinho.js'

const TelaToda = styled.div`
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

const FotoProduto = styled.img`
    width: 20vw;
    position: absolute;
    left: -20%;
    top: 0%;
 
`

const Navegaçao = styled.nav`
    max-height: 80vh;
    border-bottom: 2px solid #ffe082;
    border-right: 2px solid #ffe082;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1vw 0.5vw 1vw 1vw;
    width: 15vw;
`
const TituloNavegacao = styled.p`
    color: #363636;
    font-weight: bold;
    font-size: 2vw;
`
const Categorias = styled.p`
    color: #363636;
    font-size: 1.5vw;
    cursor: pointer;
    transition: all 0.1s ease; 
    :hover{
        color: #ff6f00;
        transform: scale(1.08);
    }
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

const Cupom2 = styled.img`
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
const InferiorProdutos = styled.div`
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

const Parametros = styled.section`
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
        secondary: amber['A900']
    }
})

class HomeUsuario extends React.Component {
    state = {
        detalheProduto: {},
        paginaAtual: 'PRODUTOS',
        valorMaximo: '',
        valorMinimo: '',
        valorBuscar: 'produto',
        ordem: 'nenhuma',
        open: false,
        ordem: '',
        isZoom: false,
        isFiltrado: true,
        produtosFiltrados: [],
        produtos: [],
        categoria: 'all'
    };

    componentDidMount() {
        this.getAllProducts()
    }

    getAllProducts = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products')
            .then(response => {
                this.setState({ produtos: response.data.products })
            }).catch(error => {
                window.alert('Erro!', error)
            })
    }

    onClickCarrinho = () => {
        this.setState({
            paginaAtual: this.state.paginaAtual === 'PRODUTOS' ? 'CARRINHO' : 'PRODUTOS'
        })
    }

    onClickPesquisa = () => {
        const pesquisa = this.state.produtos.filter((produto) => {
            return produto.name.toLowerCase().indexOf(this.state.valorBuscar.toLowerCase()) !== -1;
        })

        return pesquisa
    }

    //filtrarNumero = () => {
    //    const filtragem = this.state.produtos.filter((produto) => {
//
    //        if ((this.state.inputValorMaximo && this.state.inputValorMinimo) &&
    //            (produto.preço >= this.state.inputValorMinimo && produto.preço <= this.state.inputValorMaximo)) {
    //            return produto
//
    //        } if ((this.state.inputValorMaximo && this.state.inputValorMinimo === 0) &&
    //            (produto.preço <= this.state.inputValorMaximo)) {
    //            return produto
//
    //        } if ((this.state.inputValorMinimo && this.state.inputValorMaximo === 0) &&
    //            (this.state.inputValorMinimo >= produto.preço)) {
    //            return produto
    //        }
//
    //        else if (this.state.inputValorMinimo === 0 && this.state.inputValorMaximo === 0) {
    //        }
    //    });
    //    this.setState({
    //        isfiltrado: true,
    //        produtosFiltrados: filtragem,
    //    })
    //}


    defineListaProdutos = () => {
        const listaMaioresQueMinimo = this.state.produtos.filter(produto => {
            if (this.state.valorMinimo === "") {
                return true;
            } else {
                return produto.price >= this.state.valorInputMinimo;
            }
        }); 

        const listaMenoresQueMaximo = this.state.produtos.filter(produto => {
            if (this.state.valorMaximo === "") {
                return true;
            } else {
                return produto.price <= this.state.valorInputMaximo;
            }
        }); 

        const listaBusca = this.state.produtos.filter(produto => {
            return produto.name.toLowerCase().indexOf(this.state.valorBuscar.toLowerCase()) !== -1;
        })  

        const produtosSite = listaBusca.filter(produto => {
            return (listaMaioresQueMinimo.indexOf(produto) !== -1) && (listaMenoresQueMaximo.indexOf(produto) !== -1);
        }); 

        return produtosSite;
    }

    handleChangeOrdem = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleChangeValor = name => event => {
        this.setState({ [name]: Number(event.target.value) });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    aumentaImagem = () => {
        this.setState({ isZoom: !this.state.isZoom })
    }

    escolheCategoria = (event) => {
        this.setState({ categoria: event.target.value });
    };

    diminuiImagem = () => {
        this.setState({ isZoom: !this.state.isZoom })
    }

    handleCloseOk = () => {
        this.setState({ open: false });
    };

    handleCloseCancel = () => {
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
        let cupomAparecendo = ''
        
        const produtosCrescente = this.defineListaProdutos().sort(function (a, b) {
            return (
                a.price - b.price
            )
        })

        const produtosDecrescente = this.defineListaProdutos().sort(function (a, b) {
            return (
                b.price - a.price
            )
        })

        let produtosSite = []

        if (this.state.ordem === "crescente") {
            produtosSite = produtosCrescente.map(produto => {
                return (
                    <CardProduto>
                    <QuadradoImg>
                        <FotoProduto src={produto.photos[0]} alt='Foto do Produto' /></QuadradoImg>
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
                            onClick={() => this.onClickMaisDetalhes(produto.id)}
                        >
                            <MaisIcon className={classes.extendedIcon} />
                            Detalhes
                        </BotaoMaisDetalhes>
                    </InferiorProdutos>
                </CardProduto>
            )
        })} else if (this.state.ordem === "decrescente"){
            produtosSite = produtosDecrescente.map(produto => {
                return (
                    <CardProduto>
                        <QuadradoImg>
                            <FotoProduto src={produto.photos[0]} alt='Foto do Produto' /></QuadradoImg>
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
                                onClick={() => this.onClickMaisDetalhes(produto.id)}
                            >
                                <MaisIcon className={classes.extendedIcon} />
                                Detalhes
                            </BotaoMaisDetalhes>
                        </InferiorProdutos>
                    </CardProduto>
                )
            })
        } else {
            produtosSite = this.state.produtos.map((produto) => {
            return <CardProduto>
                <QuadradoImg>
                    <FotoProduto src={produto.photos[0]} alt='Foto do Produto' /></QuadradoImg>
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
                        onClick={() => this.onClickMaisDetalhes(produto.id)}
                    >
                        <MaisIcon className={classes.extendedIcon} />
                    Detalhes
                </BotaoMaisDetalhes>
                </InferiorProdutos>
            </CardProduto>
    })
}

switch (this.state.isZoom) {
    case false:
        cupomAparecendo = (<Cupom1 src={Promocional} alt='Código Promocional' />)
        break;
    case true:
        cupomAparecendo = (<Cupom2 src={Promocional} alt='Código Promocional' />)
        break;
    default:
        break;
}


if (this.state.paginaAtual === 'PRODUTOS') {
    return (
        <TelaToda>
            <MuiThemeProvider>
                <Cabecalho 
                    ClicaCarrinho={this.onClickCarrinho}
                    ClicaPesquisa={this.onClickPesquisa}
                />
                <Container>
                    <Navegaçao>
                        <TituloNavegacao>Categorias</TituloNavegacao>
                        <Categorias value='all' onClick={this.escolheCategoria}>Todas</Categorias>
                        <Categorias value='acessorios' onClick={this.escolheCategoria}>Acessórios</Categorias>
                        <Categorias value='convites' onClick={this.escolheCategoria}>Convites</Categorias>
                        <Categorias value='decoracao' onClick={this.escolheCategoria}>Decoração</Categorias>
                        <Categorias value='eco' onClick={this.escolheCategoria}>Eco</Categorias>
                        <Categorias value='pets' onClick={this.escolheCategoria}>Pets</Categorias>
                        <Categorias value='roupas' onClick={this.escolheCategoria}>Roupas</Categorias>
                    </Navegaçao>

                    <ConteudoPrincipal>
                        <SuperiorProdutos>
                            <PromocaoSite>
                                <div>
                                    {cupomAparecendo}
                                </div>
                                <ContainerZoom>
                                    <MaisZoom onClick={this.aumentaImagem} />
                                    <MenosZoom onClick={this.diminuiImagem} />
                                </ContainerZoom>
                            </PromocaoSite>
                            <Filtros>
                                <Button onClick={this.handleClickOpen} >
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
                                                    <option value="nenhuma"></option>
                                                    <option value="crecente">Crescente</option>
                                                    <option value="decrecente">Decrescente</option>
                                                </Select>
                                            </InputSelect>
                                        </Form>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.handleCloseCancel} color="primary">
                                            Cancel
                                                </Button>
                                        <Button onClick={this.handleCloseOk} color="primary">
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
} else if (this.state.paginaAtual === 'DETALHES') {
    return <DetalheProduto Produto={this.state.detalheProduto} />
} else {
    return <Carrinho />
}
    }
}

HomeUsuario.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeUsuario);