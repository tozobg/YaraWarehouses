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
      "Insert into products (name, size, is_hazardous) values ($1,$2,$3) RETURNING *",
      [name, size, isHazardous]
    );

    return result.rows[0];
  }
}

export { Product };
