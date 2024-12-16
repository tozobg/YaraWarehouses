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
  Mutation: {
    importProduct: async (
      _: any,
      {
        idWarehouse,
        idProduct,
        amount,
        date,
      }: {
        idWarehouse: string;
        idProduct: string;
        amount: number;
        date: string;
      }
    ) => {
      // get warehouse
      // get product

      // Check hazardous can be imported
      // Check is future:
      //// if yes, import

      //// if no, check free space
      //   await warehouseProductMovement.import({ name, size, isHazardous });
      //   await warehouseProduct.import({ name, size, isHazardous });

      return await WarehouseProductMovement.import({
        idWarehouse,
        idProduct,
        amount,
        date,
      });
    },
  },
};

export { warehouseProductMovement };
