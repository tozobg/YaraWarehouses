import { productsResolvers } from "./productsResolvers";
import { warehouseProductMovementResolvers } from "./warehouseProductMovementResolvers";
import { warehouseProductResolvers } from "./warehouseProductResolvers";
import { warehousesResolvers } from "./warehousesResolvers";

const resolvers = [
  productsResolvers,
  warehousesResolvers,
  warehouseProductResolvers,
  warehouseProductMovementResolvers,
];

export { resolvers };
