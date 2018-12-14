import React from 'react'
import Player from './Player.js'


export default class Board extends React.Component {
  render(){
    return (
      <div>
        <div className="container-first-row">
          <Player />
          <Player />
        </div>
        <div className="planechase"></div>
        <div className="container-second-row">
          <Player />
          <Player />
        </div>
      </div>
    )
  }
}