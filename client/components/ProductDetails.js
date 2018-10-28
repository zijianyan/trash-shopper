import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProduct, getProductReviews } from '../store/utils'
import Reviews from './Reviews'

class ProductDetails extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {

    if (!this.props.product) { return null }

    const { name, imageUrl, price, stock, description } = this.props.product
    const { productReviews } = this.props

    // console.log('productreviews: ', productReviews)

    return (
      <div>
        <h3> Introducing the { name }! </h3>
        <hr />
        <ul>
          <li>ImageUrl: { imageUrl }</li>
          <li>Price: $ { price } </li>
          <li>Stock: { stock } </li>
          <li>Description: { description } </li>
        </ul>
        <hr />
        <button>+</button>
        <button>-</button>
        <p>Quantity in cart:</p>
        <hr />
        <Reviews productReviews = { productReviews } />
      </div>
    )
  }
}

const mapStateToProps = ({ products, reviews }, { id }) => {
  return {
    product: getProduct(id,products),
    productReviews: getProductReviews(id, reviews)
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    addToCart: (cart, product, lineItem)=> {
      
    },
    removeFromCart: ()=> {},
  }
}

export default connect(mapStateToProps)(ProductDetails)
