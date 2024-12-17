import { WarehouseProduct } from "../models";

const warehouseProductResolvers = {
  Query: {
    // Get all warehouses products
    warehousesProducts: async () => {
      return await WarehouseProduct.all();
    },
    // Get a specific products for a warehouse by id
    warehouseProduct: async (_: any, { id }: { id: string }) => {
      return await WarehouseProduct.getById(id);
    },
    // Get all products for a warehouse by id
    warehouseProducts: async (
      _: any,
      { idWarehouse }: { idWarehouse: string }
    ) => {
      return await WarehouseProduct.allForWarehouseId(idWarehouse);
    },
    // Get all products with sizes for a warehouse by id
    allForWarehouseFullSizes: async (
      _: any,
      { idWarehouse }: { idWarehouse: string }
    ) => {
      return await WarehouseProduct.allForWarehouseFullSizes(idWarehouse);
    },
  },
};

export { warehouseProductResolvers };
