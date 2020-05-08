import React from 'react';
import styled from 'styled-components';
import Cabecalho from './HeaderCarrihno';
import Button from '@material-ui/core/Button';
import ShopIcon from '@material-ui/icons/AddShoppingCart';

const Pontas = styled.div`
    height: 20vh;
    background-color: #ff6f00;
    color: #fff8e1;
`
const BotaoAdicionar = styled.div`
    position: fixed;
    right: 200px;
    left: 50px;

    
`
const BotaoFinalizar = styled.div`
    position: absolute;
    right: 30px;
    bottom: 0;
    padding-bottom: 35px;
 
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

const container = styled.div`
height: 50px;
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
<Pontas><h1>Rodapé</h1></Pontas>  
      </div>
     

    )};

      
    
  
  
  }
    
  