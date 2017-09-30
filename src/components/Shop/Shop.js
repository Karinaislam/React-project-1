import React, { Component } from 'react';
import  fakeData from '../../fakeData'
import Shopitem from '../Shopitem/Shopitem'
class Shop extends Component {
constructor (props){
    super(props);
    this.state={
        items:[],
        cart: []
    }
    this.handelAddtoCart = this.handelAddtoCart.bind(this);
}




    componentDidMount() {
        var first10 = fakeData.slice(0,10);
       this.setState({
           items: first10
           
       })
       
       
    }
    
handelAddtoCart(key){
   var addedItem= this.state.items.find(item => item.key === key);
   var newCart = [...this.state.cart];
   newCart.push(addedItem);
   this.setState({
       cart: newCart
   })
}

    render() {
       
        return (
            <div>
                <h1>Cart Size: {this.state.cart.length}</h1>
                 {
                     this.state.items.map(item=> <Shopitem 
                     key= {item.key} 
                     item={item}
                     handelAddtoCart={this.handelAddtoCart}
                     ></Shopitem>)
                 }
            </div>
        );
    }
}

export default Shop;