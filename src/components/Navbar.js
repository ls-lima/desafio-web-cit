import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProductList, reinitData, updateTextFilter } from '../actions/main'

class NavbarWrapper extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      searchInputValue: ""
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleChange = (e) => {
    // this.setState({
    //   searchInputValue: e.target.value
    // })
    this.props.dispatch(updateTextFilter(e.target.value));
    fetchProductList();
  }

  render () {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link className="navbar-brand navbar-brand--link" onClick={() => reinitData()} to={"/"}>
            <FontAwesomeIcon className="navbar-brand--brand-icon" size="2x" icon={['fab', 'amazon']} />
            <span className="navbar-brand--brand-name">Logo</span>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Form>
              <FormGroup>
                <FontAwesomeIcon className="navbar--search-icon" size="lg" icon="search" />
                <Input
                  className="navbar--search"
                  value={this.props.navSearch} 
                  type="text" 
                  placeholder="Search" 
                  onChange={this.handleChange} />
              </FormGroup>
            </Form>
            <Nav className="ml-auto" navbar>
              <NavItem className="navbar--nav-item">
                Sign In
              </NavItem>
              <NavItem className="navbar--nav-item">
                <FontAwesomeIcon size="lg" icon="globe-americas" />
              </NavItem>
              <NavItem className="navbar--nav-item">
                <FontAwesomeIcon size="lg" icon="shopping-bag" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  navSearch: state.app.navSearch
})

export default connect(mapStateToProps)(NavbarWrapper)