import { pgClient } from "../data";

class WarehouseProduct {
  static async all() {
    const result = await pgClient.query("SELECT * FROM warehouse_products");

    return result.rows;
  }

  static async getById(id: string) {
    const result = await pgClient.query(
      "SELECT * FROM warehouse_products where id=$1",
      [id]
    );

    return result.rows[0];
  }
}

export { WarehouseProduct };
