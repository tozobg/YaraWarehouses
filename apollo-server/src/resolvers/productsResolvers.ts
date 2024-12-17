import { Product } from "../models";
import { ApolloError } from "apollo-server";

const productsResolvers = {
  Query: {
    // Get all products
    products: async () => {
      return await Product.all();
    },
    // Get a product by id
    product: async (_: any, { id }: { id: string }) => {
      return await Product.getById(id);
    },
  },
  Mutation: {
    // Create a new product
    createProduct: async (
      _: any,
      {
        name,
        size,
        isHazardous,
      }: {
        name: string;
        size: number;
        isHazardous: boolean;
      }
    ) => {
      try {
        return await Product.add({ name, size, isHazardous });
      } catch (error:any) {
        throw new ApolloError(error.message, "BUSINESS_RULE_VIOLATION");
      }
    },
  },
};

export { productsResolvers };
