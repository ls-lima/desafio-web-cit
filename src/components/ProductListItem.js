import React from 'react';
import classnames from 'classnames';

const ProductListItem = (props) => {
  return (
    <div className="product col-lg-3 col-md-4 col" onClick={() => props.onItemClick(props.product)}>
      <img className="product--image" src={props.product.image} />
      <label className="product--name">{props.product.name}</label>
      <label className="product--price">
        <span className={classnames({'product--price__cut': props.product.discount})}>{props.product.price} </span>
        {props.product.discount ? <span className="product-data--price text-danger">{props.product.discount} </span> : null}
        {props.product.currency}
      </label>
    </div>
  );
};

export default ProductListItem;