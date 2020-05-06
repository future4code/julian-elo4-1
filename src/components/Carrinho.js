import React from 'react';
import styled from 'styled-components'

import Botao from '@material-ui/core/Button'
import ShopIcon from '@material-ui/icons/AddShoppingCart'

const Pontas = styled.div`
    height: 20vh;
    background-color: #ff6f00;
    color: #fff8e1;
`


export class Carrinho extends React.Component{

    render() {
    return (
    <div>
    
      <Pontas><h1>Header</h1></Pontas>
      <br/>
<Botao variant="fab" color="primary" size="medium" ><ShopIcon /></Botao>

<br/>
<br/>
<Botao variant="contained" color="primary" size="small" >Finalizar compra</Botao>
      
 
  
        <Pontas><h1>Rodapé</h1></Pontas>
      </div>

      
      
    )
  }
}

