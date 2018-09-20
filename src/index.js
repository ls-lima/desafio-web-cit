import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/app'
import registerServiceWorker from './registerServiceWorker'

// Importação do Bootstrap 4 e do css compilado da aplicação
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

// Criando biblioteca de ícones do fontawesome para facilitar uso posterior
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faShoppingBag, faGlobeAmericas, faSearchPlus } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSearch, faShoppingBag, faGlobeAmericas, faSearchPlus)

// Criação e configuração do redux store 
export let store = createStore(rootReducer, applyMiddleware(thunk))

// Por fim, renderização da aplicação
ReactDOM.render(<App store={store} />, document.getElementById('root'))
registerServiceWorker()
