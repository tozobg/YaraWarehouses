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
