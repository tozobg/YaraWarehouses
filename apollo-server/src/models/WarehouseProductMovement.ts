import { pgClient } from "../data";

class WarehouseProductMovement {
  // Get all warehouses and products movements
  static async all() {
    const result = await pgClient.query(
      "SELECT * FROM warehouse_products_movements"
    );

    return result.rows;
  }

  // Get all products movement for a warehouse by id
  static async allForWarehouseId(idWarehouse: string) {
    const result = await pgClient.query(
      "SELECT * FROM warehouse_products_movements WHERE id_warehouse = $1",
      [idWarehouse]
    );

    return result.rows;
  }

  // Get a specific product movement by id
  static async getById(idMovement: string) {
    const result = await pgClient.query(
      "SELECT * FROM warehouse_products_movements WHERE id=$1",
      [idMovement]
    );

    return result.rows[0];
  }

  // Create a new warehouse product movement
  static async import({
    idWarehouse,
    idProduct,
    amount,
    date,
    is_future,
  }: {
    idWarehouse: string;
    idProduct: string;
    amount: number;
    date: string;
    is_future: boolean;
  }) {
    const result = await pgClient.query(
      "INSERT INTO warehouse_products_movements (id_warehouse, id_product, movement_type, amount, date, is_future) VALUES ($1, $2, 'import', $3, $4, $5) RETURNING *",
      [idWarehouse, idProduct, amount, date, is_future]
    );

    return result.rows[0];
  }
}

export { WarehouseProductMovement };
