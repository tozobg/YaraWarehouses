import { Product } from "../models";

const productsResolvers = {
  Query: {
    products: async () => {
      return await Product.all();
    },
    product: async (_: any, { id }: { id: string }) => {
      return await Product.getById(id);
    }
  },
  Mutation: {
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
