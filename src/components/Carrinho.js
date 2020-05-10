import React from 'react'
import styled from 'styled-components';
import Cabecalho from './Header';
import Button from '@material-ui/core/Button';
import ShopIcon from '@material-ui/icons/AddShoppingCart';
import Footer from './Footer'

const TituloCarrinho = styled.h2`
padding-left: 30vw;
font-size: 40px;
`

const Pontas = styled.div`
    height: 20vh;
    background-color: #ff8f00;
    color: #fff8e1;
`
const BotaoAdicionar = styled(Button)`
margin-top: 40vh;


`
const BotaoFinalizar = styled(Button)`
    margin-top: 40vh;
    
`
const ProdutosDaLoja = styled.div`
    padding-left: 7vw;
    margin-top:5vh;;

  
`
const LegendaDosProdutos = styled.div`

`


const ImagemDoProduto = styled.div`
float: left;
display:flex;
justify-content:center;
flex-direction: column;
`

const DivDosProdutos = styled.div`

`

const RodapeSite = styled.div`

`

const TituloDoProduto = styled.p`

    margin: 0.5vw 0 0 0.5vw;
    font-size:1vw;
    color: #363636;
    font-weight: bold;

`
const PrecoDoProduto = styled.p`
    margin: 0.5vw 0 0 0.5vw;
    font-size:1vw;
    color: #363636;
    font-weight: bold;
`
const FotoDoProduto = styled.img`
    height: 12vw;
    width: 12vw;
    -webkit-transition: all 0.5s ease; /* Safari e Chrome */
    -moz-transition: all 0.5s ease; /* Firefox */
    -ms-transition: all 0.5s ease; /* IE 9 */
    -o-transition: all 0.5s ease; /* Opera */
    transition: all 0.5s ease;
`


const Container = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    height: 100vh;
    width: 100vw;
    color: #ff6f00;
    background-color: #fff8e1;
    padding-top:5vh;
     
`

class Carrinho extends React.Component {

    state = {
        valorMaximo: '',
        valorMinimo: '',
        produtos: [
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
            }

        ],
    }





    render() {

        const produtosDoSite = this.state.produtos.map((produto) => {
            return (
                <ProdutosDaLoja>
                    <ImagemDoProduto>
                        <FotoDoProduto src={produto.photos} alt="Foto do produto" />
                    </ImagemDoProduto>
                    <LegendaDosProdutos>
                        <TituloDoProduto>{produto.name}</TituloDoProduto>
                        <PrecoDoProduto>R${produto.price},00</PrecoDoProduto>
                    </LegendaDosProdutos>
                </ProdutosDaLoja>
            )
        })

        return (
            <div>

                <Cabecalho />
                <Container>

                    <TituloCarrinho>Bem vindo ao seu carrinho de compras!</TituloCarrinho>
                
                    <DivDosProdutos>{produtosDoSite}</DivDosProdutos>
                    
                    <BotaoAdicionar>
                        <Button
                            variant="fab"
                            color="primary"
                            size="small" >
                            <ShopIcon
                             />
                        </Button>
                    </BotaoAdicionar>


                    <BotaoFinalizar>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large" >
                            Finalizar compra
                        </Button>
                    </BotaoFinalizar>                    

                </Container>
  
                    <Footer />                  
                
            </div>
        )
    };

}

export default (Carrinho);

