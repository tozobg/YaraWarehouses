import { gql } from "apollo-server";

const productType = gql`
  type Product {
    id: String!
    name: String!
    size: Int!
    is_hazardous: Boolean
  }
`;

export { productType };
