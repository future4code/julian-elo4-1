import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import styled from 'styled-components'
import amber from '@material-ui/core/colors/amber';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconFilter from '@material-ui/icons/Tune';
import TextField from '@material-ui/core/TextField';
import red from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button'
import MaisIcon from '@material-ui/icons/Add'
import axios from 'axios'
import MenuItem from '@material-ui/core/MenuItem';
import ZoomMais from '@material-ui/icons/ZoomIn';
import ZoomMenos from '@material-ui/icons/ZoomOut';
import Promocional from '../../img/promo.png'
import { DetalheProduto } from './DetalheProduto.js'
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from 'classnames';

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
const SuperiorProdutos = styled.section `
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
`
const PromocaoSite = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30vw; 
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
    justify-content: center;
    align-items: center;
`
const Filtros = styled.section `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    width: 45vw;
`
const IconeFiltro = styled(IconFilter)`
    font-size: 2.5vw;
    grid-area: 1/1/2/2;
    justify-self: end;
`
const TituloFiltros = styled.p `
    color: #363636;
    font-size: 2vw;
    font-weight: bold;
    grid-area: 1/2/2/4;
`
const ContainerInput = styled.section`
    display:flex;
    width: 15vw;
    justify-self: center;
`
const InputFiltroMin = styled(TextField)`  
    flex-basis: 100%;
    grid-area: 2/1/3/2;
`
const InputFiltroMax = styled(TextField)` 
    grid-area: 2/2/3/3;
    flex-basis: 100%;
`
const InputOrdem = styled(TextField)`
    grid-area: 2/3/3/4;
    flex-basis: 100%;
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
const Categorias = styled.a`
    color: #363636;
    font-size: 1.5vw;
    cursor: pointer;
    transition: all 0.1s ease; 
    text-decoration: none;
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
const BotaoMaisDetalhes = styled(Button)`
    font-size: 1vw;
    width: 10vw;
    height: 2.5vw;
    font-size: 1vw;
    display: flex;
    justify-content: space-around;
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
class Produtos extends React.Component {
    state = {
        detalheProduto: {},
        paginaAtual: 'PRODUTOS',
        valorMaximo: '',
        valorMinimo: '',
        valorBuscar: 'produto',
        ordem: 'nenhuma',
        open: false,
        isZoom: false,
        isFiltrado: true,
        produtos: [],
        filtraCategoria: false,
        produtosCategoria: [],
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
    defineListaProdutos = () => { 
        if (this.state.category === "all"){
            this.setState({listaFiltrada: this.state.produtos})
        }else{
            this.setState({listaFiltrada: this.state.produtos.filter((produtos)=>{
                if(produtos.category === this.state.categoria){
                    return true
                }else{
                    return false
                }
            })
        })
        }
 
    }

    selecionaCategoria = (categoria) => {
        const categoriaSelecionada = this.state.produtos.filter(produto => {
          if(produto.category === categoria) {
            return true
          }
        })
        this.setState({produtosCategoria: categoriaSelecionada})
        this.setState({filtraCategoria: true})
    }

    exibeTodas = () => {
      this.setState({filtraCategoria: false})
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
    mudaValorMin = (event) =>{
        this.setState({
            valorMinimo: event.target.value
        });
    }
    mudaValorMax = (event) =>{
        this.setState({ valorMaximo: event.target.value });
    }

    mudaOrdem = (event) => {
        this.setState({ ordem: event.target.value })
        console.log(this.state.ordem);
    }

    aumentaImagem = () => {
        this.setState({ isZoom: !this.state.isZoom })
        console.log(this.state.produtos)
    }

    diminuiImagem = () => {
        this.setState({ isZoom: !this.state.isZoom })
    }

    onClickMaisDetalhes = (idProduto) => {
        const produtoEspecifico = this.state.produtos.filter((item) => {
            return idProduto === item.id
        })

        this.setState({
            paginaAtual: this.state.paginaAtual === 'HomeUsuario' ? 'detalhes' : 'HomeUsuario',
            detalheProduto: produtoEspecifico
        })
    }

    render() {
        const { classes } = this.props;
        let cupomAparecendo = ''

        const quaisCategorias = this.state.produtos.map((produto) => {
            return produto.category
            }).sort().filter(function (elem, index, self) {
                return index === self.indexOf(elem); /*Retira os duplicados */
            }).map((produto) => {
                    return (
                      <Categorias href = '#' onClick = {() => this.selecionaCategoria(produto)} >
                        {produto}
                      </Categorias>
                    )
            });               
         
        let produtosSite = this.state.produtos.map((produto) => {
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
                        <Container>
                            <Navegaçao>
                                <TituloNavegacao>Categorias</TituloNavegacao>
                                <Categorias href="#" onClick={this.filtraCategoria}>Todas</Categorias>
                                {quaisCategorias}
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
                                        <IconeFiltro />
                                        <TituloFiltros>Filtros</TituloFiltros>
                                        <ContainerInput>
                                            <InputFiltroMin 
                                                label="Valor Mínimo"
                                                id="simple-start-adornment"
                                                className={classNames(classes.margin, classes.textField)}
                                                type="number"
                                                InputProps={{
                                                  startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                                  endAdornment: <InputAdornment position="end">,00</InputAdornment>
                                                }}
                                                onChange={this.mudaValorMin}
                                            />
                                        </ContainerInput>
                                        <ContainerInput>
                                            <InputFiltroMax 
                                                label="Valor Máximo"
                                                id="simple-start-adornment"
                                                className={classNames(classes.margin, classes.textField)}
                                                type="number"
                                                InputProps={{
                                                  startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                                  endAdornment: <InputAdornment position="end">,00</InputAdornment>
                                                }}
                                                onChange={this.mudaValorMax}
                                            />
                                        </ContainerInput>
                                        <ContainerInput>
                                            <InputOrdem
                                                id="standard-select-currency"
                                                select
                                                label="Ordenação"
                                                className={classes.textField}
                                                value={this.state.ordem}
                                                onChange={this.mudaOrdem}
                                                SelectProps={{
                                                  MenuProps: {
                                                    className: classes.menu,
                                                  },
                                                }}
                                                margin="normal"
                                            >
                                                <MenuItem key = {'nenhuma'} value = {'nenhuma'}> Nenhuma </MenuItem>
                                                <MenuItem key = {'crecente'} value = {'crecente'}> Crescente </MenuItem>
                                                <MenuItem key = {'decrescente'} value = {'decrecente'}> Decrescente </MenuItem>

                                            </InputOrdem>
                                        </ContainerInput>
                                    </Filtros>
                                </SuperiorProdutos>
                                            
                                <Mostruario>
                                    {produtosSite}
                                </Mostruario>
                            </ConteudoPrincipal>
                        </Container>
                                            
                    </MuiThemeProvider>
                </TelaToda>
            )
        } else {
            return <DetalheProduto Produto={this.state.detalheProduto} />
        }
    }
}

Produtos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Produtos);