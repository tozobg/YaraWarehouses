import { ApolloError } from "apollo-server";
import {
  Product,
  Warehouse,
  WarehouseProduct,
  WarehouseProductMovement,
} from "../models";
import { CalcService } from "../services";

const warehouseProductMovementResolvers = {
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
      const warehouse = await Warehouse.getById(idWarehouse);

      // get product
      const product = await Product.getById(idProduct);

      // Check hazardous can be imported
      if (
        warehouse.is_hazardous != null &&
        warehouse.is_hazardous != product.is_hazardous
      ) {
        throw new ApolloError(
          "Product cant be placed is this warehouse due to hazardous mixture.",
          "BUSINESS_RULE_VIOLATION"
        );
      }
      // Check is future:
      //// if yes, onlyt import (no current products change)
      if (
        new Date(date).setHours(0, 0, 0, 0) >
        new Date(Date.now()).setHours(0, 0, 0, 0)
      ) {
        return await WarehouseProductMovement.import({
          idWarehouse: idWarehouse,
          idProduct: idProduct,
          amount: amount,
          date: date,
          is_future: true,
        });
      }

      const warehouseProductsSizes =
        await WarehouseProduct.allForWarehouseFullSizes(idWarehouse);

      const availability = await CalcService.checkAvailability({
        warehouse: warehouse,
        product: product,
        amount: amount,
        warehouseProductsSizes: warehouseProductsSizes,
      });

      if (availability) {
        await WarehouseProduct.addAmount(idWarehouse, idProduct, amount);

        // change warehouse hazardnes
        await Warehouse.changeHazardness(idWarehouse, product.is_hazardous);

        return await WarehouseProductMovement.import({
          idWarehouse: idWarehouse,
          idProduct: idProduct,
          amount: amount,
          date: date,
          is_future: false,
        });
      } else {
        throw new ApolloError(
          "Not enough space for product in warehouse.",
          "BUSINESS_RULE_VIOLATION"
        );
      }

      //// if no, check free space
      //   await warehouseProductMovement.import({ name, size, isHazardous });
      //   await warehouseProduct.import({ name, size, isHazardous });
    },
  },
};

export { warehouseProductMovementResolvers };
