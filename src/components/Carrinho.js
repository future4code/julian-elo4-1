import React from 'react';
import styled from 'styled-components'

import Button from '@material-ui/core/Button'
import ShopIcon from '@material-ui/icons/AddShoppingCart'

const Pontas = styled.div`
    height: 20vh;
    background-color: #ff6f00;
    color: #fff8e1;
`
const BotaoAdicionar = styled.div`
   display: flex;
   align-items: flex-end;
   justify-content: flex-start;

`
const BotaoFinalizar = styled.div`
    


  
    

`


export class Carrinho extends React.Component{

    render() {
    return (
    <div>
    
      <Pontas><h1>Header</h1></Pontas>
      <br/>
      <BotaoAdicionar>
<Button variant="fab" color="primary" size="medium" ><ShopIcon /></Button>
      </BotaoAdicionar> 
      <BotaoFinalizar> 
<Button variant="contained" color="primary" size="small" >Finalizar compra</Button>
      </BotaoFinalizar>
        <Pontas><h1>Rodapé</h1></Pontas>
      </div>

      
      
    )
  }
}

