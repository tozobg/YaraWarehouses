import { Product } from "../models";

const productsResolvers = {
  Query: {
    products: async () => {
      return await Product.all();
    },
    product: async (_: any, { id }: { id: string }) => {
      return await Product.getById(id);
    },
  },
};

export { productsResolvers };
