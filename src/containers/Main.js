import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../logo.svg'
import BaseLayout from '../components/BaseLayout'
import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'
import ProductListControls from '../components/ProductListControls'

import { updateOrdinationType, fetchProductList, fetchCategories, setSelectedCategory, showProductDetails } from '../actions/main'

class Main extends Component {

  constructor() {
    super();
    fetchCategories();
    fetchProductList();

    this.onProductClick = this.onProductClick.bind(this);
  }

  onCategoryClick = (category) => {
    setSelectedCategory(category);
  }

  onOrdinationChange = (e) => {
    updateOrdinationType(e.target.value);
  }

  onProductClick = (product) => {
    showProductDetails(product);
    this.props.history.push("/productDetails")
  }

  componentDidUpdate() {
    if (!this.props.categoryList)
      fetchCategories();

    if (!this.props.productList)
      fetchProductList();
  }

  render() {
    return (
      <div>
        <CategoryList 
          selectedCategory={this.props.selectedCategory}
          onCategoryClick={this.onCategoryClick}
          categories={this.props.categoryList} />
        <ProductListControls 
          onOrdinationChange={this.onOrdinationChange}
          productListSize={this.props.productList.length} />
        <div className="container">
          <h1>
            {this.props.selectedCategory ? 
              this.props.selectedCategory.name 
            :
              "All Products"
            }
          </h1>
          <ProductList key={this.props.ordination} productList={this.props.productList} onItemClick={this.onProductClick}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  productList: state.app.productList,
  categoryList: state.app.categoryList,
  navSearch: state.app.navSearch,
  selectedCategory: state.app.selectedCategory,
  ordination: state.app.ordination
})

export default connect(mapStateToProps)(Main);