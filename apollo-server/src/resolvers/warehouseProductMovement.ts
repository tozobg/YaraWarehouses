import { WarehouseProductMovement } from "../models";

const warehouseProductMovement = {
  Query: {
    warehousesProductsMovements: async () => {
      return await WarehouseProductMovement.all();
    },
    warehouseProductsMovements: async (
      _: any,
      { idWarehouse }: { idWarehouse: string }
    ) => {
      return await WarehouseProductMovement.allForWarehouseId(idWarehouse);
    },
    warehouseProductMovement: async (
      _: any,
      { idMovement }: { idMovement: string }
    ) => {
      return await WarehouseProductMovement.getById(idMovement);
    },
  },
};

export { warehouseProductMovement };
