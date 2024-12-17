import { gql } from "apollo-server";

const warehouseProductType = gql`
  type WarehouseProduct {
    id: String
    id_warehouse: String
    id_product: String
    amount: Int
  }
  type WarehouseProductFullSize {
    name: String
    amount: String
    full_size: Int
    is_hazardous: Boolean
  }
`;

export { warehouseProductType };
