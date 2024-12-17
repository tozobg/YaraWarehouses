import { gql } from "apollo-server";

const warehouseProductQuery = gql`
  type Query {
    warehousesProducts: [WarehouseProduct]
    warehouseProduct(id: String): WarehouseProduct
    warehouseProducts(idWarehouse: String): [WarehouseProduct]
    allForWarehouseFullSizes(idWarehouse: String): [WarehouseProductFullSize]
  }
`;

export { warehouseProductQuery };
