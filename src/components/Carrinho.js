import React from 'react';
import AdicionarAoCarrinho from '@material-ui/icons/AddShoppingCart';
import Botao from '@material-ui/core/Button'
import ShopIcon from '@material-ui/icons/AddShoppingCart'
import styled from 'styled-components'


const Pontas = styled.div`
    height: 20vh;
    background-color: #ff6f00;
    color: #fff8e1;
`

export class Carrinho extends React.Component{

    render() {
    return (
      
      <div>
<Botao variant="fab" color="primary" size="medium" ><ShopIcon /></Botao>
<br/>
<br/>
<br/>
<Botao variant="contained" color="primary" size="small" >Finalizar compra</Botao>
      
      <div>
        footer
        <Pontas><h1>Rodapé</h1></Pontas>
      </div>
      </div>
      
      
    )
  }
}

