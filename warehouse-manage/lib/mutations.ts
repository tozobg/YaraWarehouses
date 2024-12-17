// lib/queries.ts
import { gql } from "@apollo/client";

export const CREATE_PRODUCTS = gql`
  mutation Mutation($name: String!, $size: Int!, $isHazardous: Boolean!) {
    createProduct(name: $name, size: $size, isHazardous: $isHazardous) {
      size
      name
      is_hazardous
      id
    }
  }
`;

export const IMPORT_PRODUCTS = gql`
  mutation Mutation(
    $idWarehouse: String!
    $idProduct: String!
    $amount: Int!
    $date: String!
  ) {
    importProduct(
      idWarehouse: $idWarehouse
      idProduct: $idProduct
      amount: $amount
      date: $date
    ) {
      id
      id_warehouse
      id_product
      amount
      movement_type
      date
      is_future
    }
  }
`;
