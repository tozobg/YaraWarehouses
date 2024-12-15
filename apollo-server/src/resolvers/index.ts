import { productsResolvers } from "./productsResolvers";
import { warehouseProductMovement } from "./warehouseProductMovement";
import { warehouseProductResolvers } from "./warehouseProductResolvers";
import { warehousesResolvers } from "./warehousesResolvers";

const resolvers = [
  productsResolvers,
  warehousesResolvers,
  warehouseProductResolvers,
  warehouseProductMovement,
];

export { resolvers };
