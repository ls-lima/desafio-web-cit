import React, { Component } from 'react'
import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
class CategoryList extends Component {

  renderCategories = () => {
    let selectedCategoryId = this.props.selectedCategory ? this.props.selectedCategory.id : null
    return this.props.categories.map((category) => {
      return (
        <NavItem className="category-list--item" key={category.id}>
          <NavLink active={selectedCategoryId == category.id} onClick={() => this.props.onCategoryClick(category)} color="dark">{category.name}</NavLink>
        </NavItem>
      )
    })
  }

  render() {
    return (
      <div className="category-list">
        <div className="container">
          <div className="row">
            <Nav pills>
              {this.renderCategories()}
            </Nav>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryList