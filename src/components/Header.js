import React, { useState} from 'react'
import {FaShoppingBasket} from 'react-icons/fa'
import Orders from './Orders';
import {Link} from 'react-router-dom'

const showOrders = (props) => {
  let sum = 0
  props.orders.forEach(el => sum += Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el => (
      <Orders onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='sum'>Сумма: {new Intl.NumberFormat() .format(sum)} руб. </p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2 className='empty__text' >Товаров нет</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div className='nav__string'>
        <Link to="/" className='logo'>Sneaker Store</Link>
        <Link to="registration" className='nav__log'>Регистрация</Link>
        <Link  to="login" className='nav__reg'>Вход</Link>
        

       <FaShoppingBasket onClick={() => setCartOpen(cartOpen =!cartOpen)} className='shop__cart-btn'/>
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
            showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div class='presentation'></div>
    </header>
  )
}

