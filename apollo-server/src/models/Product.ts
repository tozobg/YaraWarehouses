import { pgClient } from "../data";

class Product {
  // Get all products
  static async all() {
    const result = await pgClient.query("SELECT * FROM products");

    return result.rows;
  }

  // Get single products by id
  static async getById(id: string) {
    const result = await pgClient.query("SELECT * FROM products WHERE id=$1", [
      id,
    ]);

    return result.rows[0];
  }

  // Add a product
  static async add({
    name,
    size,
    isHazardous,
  }: {
    name: string;
    size: number;
    isHazardous: boolean;
  }) {
    const result = await pgClient.query(
      "INSERT INTO products (name, size, is_hazardous) VALUES ($1,$2,$3) RETURNING *",
      [name, size, isHazardous]
    );

    return result.rows[0];
  }
}

export { Product };
