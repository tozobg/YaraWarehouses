import { gql } from "apollo-server";

const warehousesType = gql`
  type Warehouse {
    id: String!
    name: String!
    size: Int!
    is_hazardous: Boolean
  }
`;

export { warehousesType };
