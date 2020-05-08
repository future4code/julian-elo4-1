import React from 'react';
import styled from 'styled-components';
import Cabecalho from './HeaderCarrihno';
import Button from '@material-ui/core/Button';
import ShopIcon from '@material-ui/icons/AddShoppingCart';

const Pontas = styled.div`
    height: 20vh;
    background-color: #ff8f00;
    color: #fff8e1;
`
const BotaoAdicionar = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  
`
const BotaoFinalizar = styled.div`
    display:flex ;
    justify-content:center;
    
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


const Container = styled.div `
    padding-top: 30px;
    height: 100vh;
    width: 100vw;
    color: #ff6f00;
    background-color: #fff8e1;
     
`

export class Carrinho extends React.Component{

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
      return <div>
        <div>
        <FotoDoProduto src={produto.photos} alt="Foto do produto" />
        </div>
        <div className="Legenda-Produtos">
     <TituloDoProduto>{produto.name}</TituloDoProduto>
     <PrecoDoProduto>R${produto.price},00</PrecoDoProduto>
      </div>     
     </div>
    })

    return (
    <div>
      
        <Cabecalho />
        <Container>

            <h2>Bem vindo ao seu carrinho de compras!</h2>  

            <BotaoAdicionar>
                <Button 
                    variant="fab" 
                    color="primary" 
                    size="medium" >
                <ShopIcon />
                </Button>
             </BotaoAdicionar> 

            <BotaoFinalizar> 
                <Button 
                    variant="contained"
                    color="primary"
                    size="small" >
                    Finalizar compra
                </Button>
            </BotaoFinalizar>

            <div>{produtosDoSite}</div>
        
        </Container>
        
        <div>
            <Pontas></Pontas>
        </div>
    </div>
    )};  
  
  }
    
  