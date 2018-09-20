import React, { Component } from 'react'
import classnames from 'classnames'
import {
  Nav,  NavItem,  NavLink,
  TabContent,  TabPane,
  Container,  Col,  Row,
  Form, FormGroup, Label, Input,
  Button
} from 'reactstrap'
import ProductGallery from './ProductGallery'

// Componente funcional que renderiza o bloco de abas com detalhes e descrição do produto
const ItemDetailsTabs = (props) => {
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: props.activeTab == '1' })}
            onClick={() => { props.onTabClick('1'); }}>
            Description
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={classnames({ active: props.activeTab == '2' })}
            onClick={() => { props.onTabClick('2'); }}>
            Details
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={props.activeTab}>
        <TabPane tabId='1' className={classnames({ active: props.activeTab == '1' })}>
          <h4>Product Description</h4>
          <p>{props.description}</p>
        </TabPane>
        <TabPane tabId='2' className={classnames({ active: props.activeTab == '2' })}>
          <h4>Product Details</h4>
          <p>{props.details}</p>
        </TabPane>
      </TabContent>
    </div>
  );
};

// Componente wrapper para elementos especificos a tela de detalhes do produto
class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 1
    }
  }

  changeActiveTab = (tabId) => {
    this.setState({
      activeTab: tabId,
      quantity: "",
    })
  }

  render() {
    return (
      <Container>
        <Row className="product-details--data">
          <Col md="6">
            <ProductGallery imageList={this.props.selectedProduct.gallery}/>
          </Col>
          <Col md="6">
            <h1>{this.props.selectedProduct.name}</h1>
            <h3 className="text-center">{this.props.selectedProduct.price}</h3>
            <Col md="6" className="m-auto">
              <Form>
                <FormGroup>
                  <Label>QTY:</Label>
                  <Input
                    className="product-details--quantity"
                    value={this.state.quantity}
                    type="number"
                    placeholder="Quantity"
                    onChange={(e) => { this.setState({ quantity: e.target.value }) }} />
                </FormGroup>
              </Form>
              <Button color="primary" block>Add to Cart</Button>
              <a href="#">Shipping Rates</a>
            </Col>
          </Col>
        </Row>
        <Row className="product-details--info">
          <Col>
            <ItemDetailsTabs
              onTabClick={this.changeActiveTab}
              activeTab={this.state.activeTab}
              details={this.props.selectedProduct.details}
              description={this.props.selectedProduct.description} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ItemDetails