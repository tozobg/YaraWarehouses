import { gql } from "apollo-server";

const warehouseQuery = gql`
  type Query {
    warehouses: [Warehouse]
    warehouse(id: String): Product
  }
`;

export { warehouseQuery };
