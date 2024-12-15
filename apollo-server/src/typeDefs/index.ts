import { productQuery } from "./queries/productQuery";
import { productType } from "./types";
import { warehouseQuery } from "./queries/warehouseQuery";
import { warehousesType } from "./types";
import { warehouseProductQuery } from "./queries/warehouseProductQuery";
import { warehouseProductType } from "./types";
import { warehouseProductMovementQuery } from "./queries/warehouseProductMovementQuery";
import { warehouseProductMovementType } from "./types";

const typeDefs = [
  [
    productQuery,
    warehouseQuery,
    warehouseProductQuery,
    warehouseProductMovementQuery,
  ],
  [
    productType,
    warehousesType,
    warehouseProductType,
    warehouseProductMovementType,
  ],
];

export { typeDefs };
