// lib/queries.ts
import { gql } from '@apollo/client';

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
