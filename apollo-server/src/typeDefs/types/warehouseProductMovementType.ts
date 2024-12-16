import { gql } from "apollo-server";

const warehouseProductMovementType = gql`
  type WarehouseProductMovement {
    id: String
    id_warehouse: String
    id_product: String
    amount: Int
    movement_type: String
    date: String
    is_future: Boolean
  }
`;

export { warehouseProductMovementType };
