import { bookQuery } from "./queries/bookQuery";
import { bookType } from "./types";
import { warehouseQuery } from "./queries/warehouseQuery";
import { warehousesType } from "./types";

// const typeDefs = [bookQuery, bookType];

const typeDefs = [ 
  [bookQuery, warehouseQuery],
  [ bookType, warehousesType]
];

// const typeDefs = [
//   { ...bookQuery, ...warehouseQuery },
//   { ...bookType, ...warehousesType },
// ];

export { typeDefs };
