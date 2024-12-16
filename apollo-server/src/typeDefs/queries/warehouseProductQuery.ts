import { gql } from "apollo-server";

const warehouseProductQuery = gql`
  type Query {
    warehouseProducts: [WarehouseProduct]
    warehouseProduct(id: String): WarehouseProduct
  }
`;

export { warehouseProductQuery };
