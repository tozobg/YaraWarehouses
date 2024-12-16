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

  static async allForWarehouseId(idWarehouse: string) {
    const result = await pgClient.query(
      "SELECT * FROM warehouse_products where id_warehouse = $1",
      [idWarehouse]
    );

    return result.rows;
  }

  static async allForWarehouseFullSizes(idWarehouse: string) {
    const result = await pgClient.query(
      `select p."name", wp.amount, (p."size" * wp.amount) as  full_size, is_hazardous  from warehouse_products wp
      inner join products p
      on wp.id_product = p.id 
      where wp.id_warehouse = $1`,
      [idWarehouse]
    );

    return result.rows;
  }

  static async addAmount(
    idWarehouse: string,
    idProduct: string,
    amount: number
  ) {
    const result = await pgClient.query(
      `INSERT INTO warehouse_products (id_warehouse, id_product, amount)
        VALUES ($1, $2, $3) 
        ON CONFLICT (id_warehouse, id_product) 
        DO UPDATE 
        SET amount = warehouse_products.amount + $3;;`,
      [idWarehouse, idProduct, amount]
    );

    return true;
  }
}

export { WarehouseProduct };
