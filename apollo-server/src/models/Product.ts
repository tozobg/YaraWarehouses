import { pgClient } from "../data";

class Product {
  static async all() {
    const result = await pgClient.query("SELECT * FROM products");

    return result.rows;
  }

  static async getById(id: string) {
    const result = await pgClient.query("SELECT * FROM products where id=$1", [
      id,
    ]);

    return result.rows[0];
  }
}

export { Product };
