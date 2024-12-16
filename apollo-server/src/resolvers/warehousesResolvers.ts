import { Warehouse } from "../models";

const warehousesResolvers = {
  Query: {
    warehouses: async () => {
      return await Warehouse.all();
    },
    warehouse: async (_: any, { id }: { id: string }) => {
      return await Warehouse.getById(id);
    },
  },
  Mutation: {
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
