import { pgClient } from "../data";

class WarehouseProductMovement {
  static async all() {
    const result = await pgClient.query(
      "SELECT * FROM warehouse_products_movements"
    );

    return result.rows;
  }

  static async allForWarehouseId(idWarehouse: string) {
    const result = await pgClient.query(
      "SELECT * FROM warehouse_products_movements where id_warehouse = $1",
      [idWarehouse]
    );

    return result.rows;
  }

  static async getById(idMovement: string) {
    const result = await pgClient.query(
      "SELECT * FROM warehouse_products_movements where id=$1",
      [idMovement]
    );

    return result.rows[0];
  }
}

export { WarehouseProductMovement };
