import { gql } from "apollo-server";

const productMutation = gql`
  type Mutation {
    createProduct(name: String!, size: Int!, isHazardous: Boolean!): Product
  }
`;

export { productMutation };
