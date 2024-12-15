import { gql } from "apollo-server";

const productQuery = gql`
  type Query {
    products: [Product]
    product(id: String): Product
  }
`;

export { productQuery };
