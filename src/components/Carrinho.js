import React from 'react';
import AdicionarAoCarrinho from '@material-ui/icons/AddShoppingCart';
import Botao from '@material-ui/core/Button'
import ShopIcon from '@material-ui/icons/AddShoppingCart'


export class Carrinho extends React.Component{

    render() {
    return (
      <div>
       header
      <div>
<Botao variant="fab" color="primary" size="medium" ><ShopIcon /></Botao>
<br/>
<br/>
<br/>
<Botao variant="contained" color="primary" size="small" >Finalizar compra</Botao>
      
      <div>
        footer
      </div>
      </div>
      </div> 
      
    )
  }
}

