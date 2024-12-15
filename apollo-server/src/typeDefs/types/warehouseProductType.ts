import { gql } from "apollo-server";

const warehouseProductType = gql`
  type WarehouseProduct {
    id: String!
    id_warehouse: String!
    id_product: String!
    amount: Int!
  }
`;

export { warehouseProductType };
