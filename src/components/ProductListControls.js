import React from 'react'
import { 
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'

const ProductListControls = (props) => {
  return (
    <div className="product-list-controls">
      <div className="container">
        <div className="d-inline text-left">
          <Label className="product-list-controls--label font-weight-bold" for="ordination">Sort By</Label>
          <Input className="product-list-controls--select" type="select" name="select" id="ordination" onChange={props.onOrdinationChange}>
            <option value="0">A - Z</option>
            <option value="1">Z - A</option>
          </Input>
        </div>
        <div className="float-right">
          <label className="product-list-controls--label">Viewing {props.productListSize} of {props.productListSize}</label>
        </div>
      </div>
    </div>
  )
}

export default ProductListControls