import { booksResolvers } from "./booksResolvers";
import { warehousesResolvers } from "./warehousesResolvers";

//const resolvers = [booksResolvers];
const resolvers = [booksResolvers, warehousesResolvers];

export { resolvers };
