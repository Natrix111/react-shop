import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Items from "./Items"
import ShowFullItem from "./ShowFullItem"

class Home extends React.Component {
  constructor(props) {
super(props)
this.state = {
  orders: [],
  items: [
    {
      id: 1,
      title: 'Nike Dunk SB Reese Forbes Denim',
      img: 'nike-sb.png',
      desc: '*limited collection',
      price: '14990'
    },
    {
      id: 2,
      title: 'Stussy x Nike SB Dunk Low «Cherry»',
      img: 'nike-sb-stussy.png',
      desc: '*limited collection',
      price: '220500'
    },
    {
      id: 3,
      title: 'Nike SB Dunk Low «Colors By SUPA»',
      img: 'nike__sb.png',
      desc: '*limited collection',
      price: '25000'
    },
    {
      id: 4,
      title: 'Nike Dunk High Pro SB "Send Help"',
      img: 'aj1.png',
      desc: '*limited collection',
      price: '89990'
    },
    {
      id: 5,
      title: 'Nike Dunk High SB "MF Doom"',
      img: 'nike-sb-doom.png',
      desc: '*limited collection',
      price: '290999'
    },
    {
      id: 6,
      title: 'Nike DUNK HIGH PRO SB "DE LA SOUL"',
      img: 'aj1green.png',
      desc: '*limited collection',
      price: '119500'
    }
  ],
  showFullItem: false,
  fullItem: {}
}
this.state.currentItems = this.state.items
this.addToOrder = this.addToOrder.bind(this)
this.deleteOrder = this.deleteOrder.bind(this)
this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
  return (
    <div className="wrapper">
    <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
    <Items onShowItem={this.onShowItem} items={this.state.items} onAdd={this.addToOrder} />
    {this.state.showFullItem && <ShowFullItem  onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} /> }
    <Footer />
    </div>
  )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})

  }

  addToOrder(item) {
    let dubleItem = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      dubleItem = true
    })
    if(!dubleItem)
this.setState({orders: [...this.state.orders, item]})
  }
}

export default Home;