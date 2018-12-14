import React from 'react'


export default class ButtonCounter extends React.Component {
  constructor(props){
    super()
    this.state = {
      type: props.type,
      start: props.value
    }
  }
  render(){
   return (
    <div>
      <div className="">{props.type}: {life}
        <button className="life-plus">+</button>
        <button className="life-minus">-</button>
      </div>
    </div>
    )
  }
}