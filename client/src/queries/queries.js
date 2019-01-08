import { gql } from 'apollo-boost';

const getProductsQuery = gql`
  {
    products {
      name
      category
      id
    }
  }
`;

const getBrandsQuery = gql`
  {
    brands {
      name
      id
    }
  }
`;

const addProductMutation = gql`
  mutation($name: String!, $category: String!, $brandId: ID!) {
    addProduct(name:$name, category:$category, brandId: $brandId) {
      name
      id
    }
  }
`;

const getProductQuery = gql`
  query($id: ID) {
    product(id: $id) {
      id
      name
      category
      brand {
        id
        name
        category
        products {
          name
          id
        }
      }
    }
  }
`;

export {
  getProductsQuery,
  getBrandsQuery,
  addProductMutation,
  getProductQuery
} 