import { pgClient } from "../data";

class Warehouse {
  static async all() {
    const result = await pgClient.query("SELECT * FROM warehouses");

    return result.rows;
  }

  static async getById(id: string) {
    const result = await pgClient.query(
      "SELECT * FROM warehouses where id=$1",
      [id]
    );

    return result.rows[0];
  }
}

export { Warehouse };
