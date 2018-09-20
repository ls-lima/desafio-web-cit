import React, { Component } from 'react'
import { connect } from 'react-redux' 
import ProductListItem from './ProductListItem'

class ProductList extends Component {

  renderProductList() {
    return this.props.productList.map((product) => {
      return <ProductListItem key={product.id} product={product} onItemClick={this.props.onItemClick} />
    })
  }

  render () {
    return (
      <div className="product-list-wrapper row">
        {this.renderProductList()}    
      </div>
    )
  }
}

export default ProductList