import { gql } from "apollo-server";

const warehouseProductMovementQuery = gql`
  type Query {
    warehousesProductsMovements: [WarehouseProductMovement]
    warehouseProductsMovements(idWarehouse: String): [WarehouseProductMovement]
    warehouseProductMovement(idMovement: String): WarehouseProductMovement
  }
`;

export { warehouseProductMovementQuery };
