import { Warehouse } from "../models";

const warehousesResolvers = {
  Query: {
    warehouses: () => Warehouse.all(),
  },
};

export { warehousesResolvers };
