import { productsResolvers } from "./productsResolvers";
import { warehouseProductResolvers } from "./warehouseProductResolvers";
import { warehousesResolvers } from "./warehousesResolvers";

const resolvers = [
  productsResolvers,
  warehousesResolvers,
  warehouseProductResolvers,
];

export { resolvers };
