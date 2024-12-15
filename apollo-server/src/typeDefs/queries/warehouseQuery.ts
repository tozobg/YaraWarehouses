import { gql } from "apollo-server";

const warehouseQuery = gql`
  type Query {
    warehouses: [Warehouse]
  }
`;

export { warehouseQuery };
