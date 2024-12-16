import { gql } from "apollo-server";

const warehouseMutation = gql`
  type Mutation {
    createWarehouse(name: String!, size: Int!): Warehouse
  }
`;

export { warehouseMutation };
