import { pgClient } from "../data";

class Warehouse {
  // Get all warehouses
  static async all() {
    const result = await pgClient.query("SELECT * FROM warehouses");

    return result.rows;
  }

  // Get warehouse by id
  static async getById(id: string) {
    const result = await pgClient.query(
      "SELECT * FROM warehouses WHERE id=$1",
      [id]
    );

    return result.rows[0];
  }

  // Change warehouse is_hazardous property
  static async changeHazardness(idWarehouse: string, isHazardous: boolean) {
    const result = await pgClient.query(
      `UPDATE warehouses 
      SET is_hazardous = $1 
      WHERE id = $2`,
      [isHazardous, idWarehouse]
    );

    return result.rows[0];
  }

  // Add a warehouse
  static async add({ name, size }: { name: string; size: number }) {
    const result = await pgClient.query(
      "INSERT INTO warehouses (name, size) VALUES ($1,$2) RETURNING *",
      [name, size]
    );

    return result.rows[0];
  }
}

export { Warehouse };
