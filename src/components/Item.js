import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
        <div className='item'>
          <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
          <h2 className='item__title'>{this.props.item.title}</h2>
          <p className='item__desc'>{this.props.item.desc}</p>
          <b className='item__price'>{this.props.item.price} руб.</b>
          <div className='item__btn' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
    )
  }
}

export default Item