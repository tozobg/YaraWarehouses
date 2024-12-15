import { Warehouse } from "../models";

const warehousesResolvers = {
  Query: {
    warehouses: async () => {
        return await Warehouse.all()
    },
    warehouse: async (_: any, { id }: { id: string }) => {
      return await Warehouse.getById(id);
    },
  },
};

export { warehousesResolvers };
