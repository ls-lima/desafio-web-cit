import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import { Provider } from 'react-redux'

import Main from './Main'
import ProductDetails from './ProductDetails'
import BaseLayout from '../components/BaseLayout';

/* Montagem do entry point da aplicação
* Aqui foi instanciado o provedor de dados para meus componentes, 
*  criado o layout base e também configuradas as rotas de navegação
*/
const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/productDetails" component={ProductDetails} />
          <Route component={Main} />
        </Switch>
      </BaseLayout>
    </Router>
  </Provider>
)

export default App
