import React from 'react'
import ButtonCounter from './ButtonCounter.js'

export default class Player extends React.Component {
  constructor(props){
    super()
    this.state = {
      name: props.name,
      life: 40,
      poison: '',
      playerOneDamage: '',
      playerTwoDamage: '',
      playerThreeDamage: ''
    }
  }
  render(){
    const {name, life, poison, playerOneDamage, playerTwoDamage, playerThreeDamage} =  this.state
    return(
      <div>
        <div className="player">
            <ButtonCounter />
            <ButtonCounter />
            <ButtonCounter />
            <ButtonCounter />
            <ButtonCounter />
        </div>
      </div>
    )
  }
}