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

  static async import({
    idWarehouse,
    idProduct,
    amount,
    date,
  }: {
    idWarehouse: string;
    idProduct: string;
    amount: number;
    date: string;
  }) {
    const result = await pgClient.query(
      "Insert into warehouse_products_movements (id_warehouse, id_product, movement_type, amount, date) values ($1, $2, 'import', $3, $4) RETURNING *",
      [idWarehouse, idProduct, amount, date]
    );

    return result.rows[0];
  }
}

export { WarehouseProductMovement };
