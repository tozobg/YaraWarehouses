import { Warehouse } from "../models";

const warehousesResolvers = {
  Query: {
    // Get all warehouses
    warehouses: async () => {
      return await Warehouse.all();
    },
    // Get a specific warehouse by id
    warehouse: async (_: any, { id }: { id: string }) => {
      return await Warehouse.getById(id);
    },
  },
  Mutation: {
    // Create a warehouse
    createWarehouse: async (
      _: any,
      {
        name,
        size,
      }: {
        name: string;
        size: number;
      }
    ) => {
      return await Warehouse.add({ name, size });
    },
  },
};

export { warehousesResolvers };
