import { gql } from "apollo-server";

const warehouseProductMovementMutation = gql`
  type Mutation {
    importProduct(
      idWarehouse: String!
      idProduct: String!
      amount: Int!
      date: String!
    ): WarehouseProductMovement!
  }
`;

export { warehouseProductMovementMutation };
