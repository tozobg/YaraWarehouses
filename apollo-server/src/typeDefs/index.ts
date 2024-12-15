import {
  productQuery,
  warehouseQuery,
  warehouseProductQuery,
  warehouseProductMovementQuery,
} from "./queries";
import {
  warehouseProductMovementType,
  warehouseProductType,
  warehousesType,
  productType,
} from "./types";
import { productMutation, warehouseMutation } from "./mutations";

const typeDefs = [
  [
    productQuery,
    warehouseQuery,
    warehouseProductQuery,
    warehouseProductMovementQuery,
  ],
  [productMutation, warehouseMutation],
  [
    productType,
    warehousesType,
    warehouseProductType,
    warehouseProductMovementType,
  ],
];

export { typeDefs };
