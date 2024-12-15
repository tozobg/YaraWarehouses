import { WarehouseProduct } from "../models";

const warehouseProductResolvers = {
  Query: {
    warehouseProducts: async () => {
      return await WarehouseProduct.all();
    },
    warehouseProduct: async (_: any, { id }: { id: string }) => {
      return await WarehouseProduct.getById(id);
    },
  },
};

export { warehouseProductResolvers };
