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
    // Get all warehouses and products movements
    warehousesProductsMovements: async () => {
      return await WarehouseProductMovement.all();
    },
    // Get all products movement for a warehouse by id
    warehouseProductsMovements: async (
      _: any,
      { idWarehouse }: { idWarehouse: string }
    ) => {
      return await WarehouseProductMovement.allForWarehouseId(idWarehouse);
    },
    // Get a specific product movement by id
    warehouseProductMovement: async (
      _: any,
      { idMovement }: { idMovement: string }
    ) => {
      return await WarehouseProductMovement.getById(idMovement);
    },
  },
  Mutation: {
    // Import a product to a warehouse
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
      // Get the product and warehouse
      const warehouse = await Warehouse.getById(idWarehouse);
      const product = await Product.getById(idProduct);

      // Check hazardous buizines rule
      if (
        warehouse.is_hazardous != null &&
        warehouse.is_hazardous != product.is_hazardous
      ) {
        throw new ApolloError(
          "Product cant be placed is this warehouse due to hazardous mixture.",
          "BUSINESS_RULE_VIOLATION"
        );
      }

      // Check is future importt (just create a movement without reflecting current stock):
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

      // Calculate all product sizes in warehouse
      const warehouseProductsSizes =
        await WarehouseProduct.allForWarehouseFullSizes(idWarehouse);

      // Call 3rd party API for availability check of size
      const availability = await CalcService.checkAvailability({
        warehouse: warehouse,
        product: product,
        amount: amount,
        warehouseProductsSizes: warehouseProductsSizes,
      });

      // Add product amount, Change warehouse hazardness, Add product movement import
      if (availability.data.isAvailable) {
        await WarehouseProduct.addAmount(idWarehouse, idProduct, amount);

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
    },
  },
};

export { warehouseProductMovementResolvers };
