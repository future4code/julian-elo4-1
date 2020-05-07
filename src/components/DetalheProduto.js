import React, { Component } from 'react'
import ButtonCart from '@material-ui/core/Button'
import CartIcon from '@material-ui/icons/ShoppingCart'
import ButtonFav from '@material-ui/core/Button'
import FavIcon from '@material-ui/icons/Favorite'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery';
import '../App.css'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    header {
        width: 100vw;
        height: 10vh;
    }
`

const Galeria = styled.div`
    margin-left: 3vw;
    width: 45vw;
`

const InfoProduto = styled.div`
    margin-left: 5vw;
`

export class DetalheProduto extends Component {
    state = {
        produto: {
            nome: 'Loren Ipsum',
            imagem: 'https://picsum.photos/450',
            preco: 10.99
        }
    }

    render() {
        const images = [
            {
              original: 'https://picsum.photos/id/1018/1000/600/',
              thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
              original: 'https://picsum.photos/id/1015/1000/600/',
              thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
              original: 'https://picsum.photos/id/1019/1000/600/',
              thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
          ];

        return (
        <Container>
            <header>HEADER</header>
            <Galeria>
                <ImageGallery items={images} autoPlay={false}/>
            </Galeria>
            <InfoProduto>
                <h2>{this.state.produto.nome}</h2>
                <h3>
                    {'R$'}
                    {this.state.produto.preco}
                </h3>
                <p>Categoria: Decoração</p>
                <p>Em até 10x de R$ 1,10 sem juros</p>
                <ButtonCart variant='contained' >
                    <CartIcon />
                    Adicionar ao Carrinho
                </ButtonCart>
                <ButtonFav variant='contained'>
                    <FavIcon />
                    Favoritos
                </ButtonFav>
                <p>Método de pagamento: </p>
                <p>
                    <h4>Descrição</h4>
                </p>
            </InfoProduto>
        </Container>
        )
    }
} 