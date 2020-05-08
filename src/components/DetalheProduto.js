import React, { Component } from 'react'
import ButtonCart from '@material-ui/core/Button'
import CartIcon from '@material-ui/icons/ShoppingCart'
import ButtonFav from '@material-ui/core/Button'
import FavIcon from '@material-ui/icons/Favorite'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery';
import '../App.css'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import amber from '@material-ui/core/colors/amber';
import Cabecalho from './Header'
import ButtonBack from '@material-ui/core/Button'
import BackIcon from '@material-ui/icons/ChevronLeft'
import HomeUsuario from './HomeUsuario.js'
import Rodape from './Footer'

const temaDetalheProduto = createMuiTheme({
    palette: {
        primary: {
            main: '#ffa000'
        },
        secondary: amber['A900']
    }
})

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #fff8e1;

    h2, h3 {
        color: #E47106;
    }
`
const Galeria = styled.div`
    margin-top: 2vh;
    margin-left: 3vw;
    width: 45vw;
`
const InfoProduto = styled.div`
    margin-left: 5vw;

    .informacoesProduto {
        margin: 1vw;
    }    
`
const Descricao = styled.p`
    margin: 1vw;
    width: 40vw;
    text-align: justify;
`
const ContainerBotoes = styled.div`
    margin: 2vw;
    display: flex;
    width: 40vw;
    justify-content: center;
`
const StyledButtonCart = styled(ButtonCart)`
    flex-basis: 100%;
    margin-right: 1vw;
    width: 10vw;
    height: 7vh;
`
const StyledButtonFav = styled(ButtonFav)`
    flex-basis: 100%;
    margin-right: 1vw;
    width: 10vw;
    height: 7vh;
`
const Header = styled.div`
    width: 100vw;
`

export class DetalheProduto extends Component {
    state = {
        produto: this.props.Produto,
        paginaAtual: 'DETALHES',
    }

    onClickVoltar = () => {
        this.setState({
            paginaAtual: this.state.paginaAtual === 'DETALHES' ? 'PRODUTOS' : 'DETALHES'
        })
    }

    render() {
        console.log(this.state.produto)
        let images = []
        let formatoImagens = {
            original: '',
            thumbnail: ''
        }

        this.state.produto.map((produto) => {
            return (
                produto.photos.map((foto) => {
                    return (
                        formatoImagens = {
                            original: foto,
                            thumbnail: foto
                        },
                        images = [...images, formatoImagens]
                    )
                })
            )
        })

        if (this.state.paginaAtual === 'DETALHES') {
            return (
                <MuiThemeProvider theme={temaDetalheProduto}>
                    <Container>
                        <Header>
                            <Cabecalho />
                        </Header>
                        <Galeria>
                            <ImageGallery items={images} autoPlay={false} />
                        </Galeria>
                        {this.state.produto.map((produto) => {
                            return (
                                <InfoProduto>
                                    <h2 className={'informacoesProduto'}>{produto.name}</h2>
                                    <h3 className={'informacoesProduto'}>
                                        {'R$'}
                                        {produto.price}
                                        {',00'}
                                    </h3>
                                    <p className={'informacoesProduto'}>Categoria: {produto.category}</p>
                                    {produto.paymentMethod === 'boleto' ? <div></div> : <p className={'informacoesProduto'}>Em até {produto.installments}x de R$ {(produto.price / produto.installments).toFixed(2)} sem juros.</p>}
                                    <ContainerBotoes>
                                        <StyledButtonCart
                                            variant='contained'
                                            color="primary"
                                        >
                                            <CartIcon />
                                    Adicionar ao Carrinho
                                </StyledButtonCart>
                                        <StyledButtonFav
                                            variant='contained'
                                            color="primary"
                                        >
                                            <FavIcon />
                                    Favoritos
                                </StyledButtonFav>
                                    </ContainerBotoes>

                                    <p className={'informacoesProduto'}>Método de pagamento: {produto.paymentMethod}</p>
                                    <h4 className={'informacoesProduto'}>Descrição</h4>
                                    <Descricao>
                                        {produto.description}
                                    </Descricao>
                                    <ButtonBack
                                        variant='text'
                                        color='primary'
                                        onClick={this.onClickVoltar}
                                    >
                                        <BackIcon />
                                    Voltar
                                </ButtonBack>
                                </InfoProduto>
                            )
                        })}
                    </Container>
                    <Rodape />
                </MuiThemeProvider>
            )
        } else {
            return <HomeUsuario />
        }
    }
}