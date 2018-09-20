import { getProductList, getFilteredProductList, getCategories } from '../api/service'
import { store } from '../index'

/* Actions Creators, criados para comunicar ações ao reducer */
const updateProductList = (productList) => ({
  type: 'FETCH_PRODUCT_LIST',
  productList
})

const updateCategories = (categoryList) => ({
  type: 'FETCH_CATEGORY_LIST',
  categoryList
})

const updateSelectedCategory = (selectedCategory) => ({
  type: 'SELECT_CATEGORY',
  selectedCategory
})

const changeOrdinationType = (ordination) => ({
  type: 'CHANGE_ORDINATION',
  ordination
})

const setSelectedProduct = (selectedProduct) => ({
  type: 'SELECT_PRODUCT',
  selectedProduct
})

export const updateTextFilter = (navSearch) => ({
  type: 'UPDATE_SEARCH',
  navSearch
})

const reset = () => ({
  type: 'RESET',
})

// Responsável por resetar dados e instanciar dados na aplicação conforme navegação do usuário
export const reinitData = (category = null) => {
  store.dispatch(reset());
  fetchCategories();
  if (category)
    setSelectedCategory(category)
  else 
    fetchProductList();
}

/* Responsável por atualizar estado de filtragem por categoria
* É realizada uma nova busca de produtos para obter os dados solicitados pelo usuário
*/
export const setSelectedCategory = (category) => {
  store.dispatch(updateSelectedCategory(category)) ;
  fetchProductList();
}

/* Responsável por atualizar estado de ordenação no reducer e 
*  solicitar a atualização da lista de produtos
*/
export const updateOrdinationType = (ordination) => {
  store.dispatch(changeOrdinationType(ordination))
  fetchProductList();
}

/* Obtém a lista de categorias que serão listadas abaixo da barra de navegação
*/
export const fetchCategories = () => {
  store.dispatch(updateCategories(getCategories()))
}

/* Solicita a atualização da lista de produtos conforme
*  parametros de ordenação, categoria selecionada e filtro de busca
*/
export const fetchProductList = () => {
  let data = []
  let state = store.getState().app

  data = getProductList(state.navSearch, state.selectedCategory, state.ordination);
  store.dispatch(updateProductList(data))
}

// Atualiza produto selecionado no reducer, permitindo a navegação para tela de detalhes
export const showProductDetails = (product = null) => {
  store.dispatch(setSelectedProduct(product));
}