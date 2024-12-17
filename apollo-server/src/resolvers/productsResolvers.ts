import { Product } from "../models";

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
      return await Product.add({ name, size, isHazardous });
    },
  },
};

export { productsResolvers };
