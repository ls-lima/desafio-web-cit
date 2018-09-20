import { combineReducers } from 'redux'
import * as constants from '../utils/constants'

/* Reducer implementado para gerenciar estado da aplicação ao navegar entre as telas
*  visando uma melhora de manutenabilidade.
*  Em um caso ideal, estes atributos deveriam estar dividos em mais reducers, 
*  por uma questão de coesão e divisão de responsabilidades.
*/ 

// Configuração de estado inicial da aplicação
const initialState = {
  productList: [],
  categoryList: [],
  navSearch: "",
  itemsOnCart: 0,
  selectedCategory: null,
  selectedProduct: null,
  ordination: constants.ORD_ASCENDING
}

function app(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_ORDINATION':
      return {
        ...state,
        ordination: action.ordination
      }
    case 'UPDATE_SEARCH':
      return {
        ...state,
        navSearch: action.navSearch
      }
    case 'FETCH_PRODUCT_LIST':
      return {
        ...state,
        productList: action.productList
      }
    case 'FETCH_CATEGORY_LIST':
      return {
        ...state,
        categoryList: action.categoryList
      }
    case 'SELECT_CATEGORY': 
      return {
        ...state,
        selectedCategory: action.selectedCategory
      }
    case 'SELECT_PRODUCT':
      return {
        ...state,
        selectedProduct: action.selectedProduct
      }
    case 'RESET':
      return {
        ...initialState
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({app})

export default rootReducer