// lib/queries.ts
import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      size
      is_hazardous
      name
    }
  }
`;

export const GET_WAREHOUSES = gql`
  query Warehouses {
    warehouses {
      id
      name
      size
    }
  }
`;

export const GET_WAREHOUSE_PRODUCTS = gql`
  query Query($idWarehouse: String) {
    warehouseProducts(idWarehouse: $idWarehouse) {
      id
      id_warehouse
      id_product
      amount
    }
  }
`;

export const GET_WAREHOUSE_PRODUCTS_FULL_SIZE = gql`
  query Query($idWarehouse: String) {
    allForWarehouseFullSizes(idWarehouse: $idWarehouse) {
      name
      amount
      full_size
      is_hazardous
    }
  }
`;

export const GET_WAREHOUSE_PRODUCTS_MOVEMENTS = gql`
  query Query($idWarehouse: String) {
    warehouseProductsMovements(idWarehouse: $idWarehouse) {
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
