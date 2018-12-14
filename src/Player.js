import React from 'react'

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
            <div className="name">{name}</div>

              <div className="life">Life: {life}
                <button className="life-plus">+</button>
                <button className="life-minus">-</button>
              </div>

              <div className="poison-damage">Poison: {poison}
                <button className="life-plus">+</button>
                <button className="life-minus">-</button>
              </div>

              <div className="command-damage">Damage from Player One {playerTwoDamage}
                <button className="life-plus">+</button>
                <button className="life-minus">-</button>
              </div>

              <div className="command-damage">Damage from Player Two{playerTwoDamage}
                <button className="life-plus">+</button>
                <button className="life-minus">-</button>
              </div>

              <div className="command-damage">Damage from Player Three{playerThreeDamage}
                <button className="life-plus">+</button>
                <button className="life-minus">-</button>
              </div>

        </div>
      </div>
    )
  }
}