import { WarehouseProduct } from "../models";

const warehouseProductResolvers = {
  Query: {
    warehousesProducts: async () => {
      return await WarehouseProduct.all();
    },
    warehouseProduct: async (_: any, { id }: { id: string }) => {
      return await WarehouseProduct.getById(id);
    },
    warehouseProducts: async (
      _: any,
      { idWarehouse }: { idWarehouse: string }
    ) => {
      return await WarehouseProduct.allForWarehouseId(idWarehouse);
    },
  },
};

export { warehouseProductResolvers };
