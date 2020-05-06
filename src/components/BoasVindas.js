import React, { Component } from 'react'
import { DetalheProduto } from './DetalheProduto'
import HomeUsuario from './HomeUsuario'

export class AppContainer extends Component {
  render() {
    return (
      <div>
          <DetalheProduto />
          <HomeUsuario />
      </div>
    )
  }
}
