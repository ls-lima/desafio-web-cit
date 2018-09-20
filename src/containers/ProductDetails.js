import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

import BaseLayout from '../components/BaseLayout'
import CategoryList from '../components/CategoryList'
import ItemDetails from '../components/ItemDetails'

import { fetchCategories, reinitData } from '../actions/main'

class ProductDetails extends Component {

  constructor() {
    super();
    fetchCategories();
  }

  onCategoryClick = (category) => {
    reinitData(category)
    this.props.history.push("/");
  }

  render () {
    if (this.props.selectedProduct) {
      return (
        <div>
          <CategoryList 
            selectedCategory={this.props.selectedCategory}
            onCategoryClick={this.onCategoryClick}
            categories={this.props.categoryList} />
          <ItemDetails selectedProduct={this.props.selectedProduct} />
        </div>
      )
    } else {
      return (
        <Redirect push to={"/"} />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  categoryList: state.app.categoryList,
  navSearch: state.app.navSearch,
  selectedCategory: state.app.selectedCategory,
  selectedProduct: state.app.selectedProduct,
  ordination: state.app.ordination
})

export default connect(mapStateToProps)(ProductDetails)