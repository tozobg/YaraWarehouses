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

  static async changeHazardness(idWarehouse: string, isHazardous: boolean) {
    const result = await pgClient.query(
      `UPDATE warehouses 
      SET is_hazardous = $1 
      WHERE id = $2`,
      [isHazardous, idWarehouse]
    );

    return result.rows[0];
  }

  static async add({ name, size }: { name: string; size: number }) {
    const result = await pgClient.query(
      "Insert into warehouses (name, size) values ($1,$2) RETURNING *",
      [name, size]
    );

    return result.rows[0];
  }
}

export { Warehouse };
