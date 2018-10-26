import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'

const _getProducts = (products) => ({ type: GET_PRODUCTS, products })

const getProducts = () => {
  return (dispatch) => {
    return axios.get('/api/products')
      .then(response => response.data)
      .then(products => dispatch(_getProducts(products)))
      .catch(error => console.log(error.message))
  }
}

const productReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products.sort(function (a, b) {
        return a.name - b.name
      });
  }
  return state;
}

export { productReducer, getProducts }