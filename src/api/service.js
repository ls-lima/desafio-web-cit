import * as constants from '../utils/constants'
const json = require('./MOCK_DATA.json')

/* Classe responsável por obter dados do data source - nesse caso, o arquivo MOCK_DATA.json
*/

// Obtém listagem de categorias para navegação
export const getCategories = () => {
    let output = json.categories

    return output;
}

// Busca, filtra e ordena, conforme necessário, a lista de produtos
export const getProductList = (filterValue, category, ordination) => {

  let output = json.productList

  if (category)
    output = filterProductListByCategory(output, category);
  
  if (filterValue)
    output = filterProductListByName(output, filterValue);

  return orderOutput(output, ordination)
}

// Método responsável pela ordenação de saida da lista de produtos, conforme selecionado pelo usuário
const orderOutput = (productList, ordination) => {
  return productList.sort((productA, productB) => {
    var auxProductA = (""+productA.name).toLowerCase(); 
    var auxProductB = (""+productB.name).toLowerCase();
    if (ordination == constants.ORD_DESCENDING) {
      return ((auxProductA > auxProductB) ? -1 : ((auxProductA < auxProductB) ? 1 : 0)); 
    } else {
      return ((auxProductA < auxProductB) ? -1 : ((auxProductA > auxProductB) ? 1 : 0));
    }
  });
}

// Método responsável pela filtragem de produtos por nome
const filterProductListByName = (productList, filterValue) => {
  return productList.filter((product, index) => {
    if (product.name.toUpperCase().includes(filterValue.toUpperCase()))
      return true
  })
}

// Método responsável pela filtragem de produtos por categoria
const filterProductListByCategory = (productList, category) => {
  return productList.filter((product, index) => {
    if (product.category.id == category.id)
      return true
  })
}