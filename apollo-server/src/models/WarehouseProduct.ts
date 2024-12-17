import { pgClient } from "../data";

class WarehouseProduct {
  // Get all warehouses and all products
  static async all() {
    const result = await pgClient.query("SELECT * FROM warehouse_products");

    return result.rows;
  }

  // Get a single warehouse product by id
  static async getById(id: string) {
    const result = await pgClient.query(
      "SELECT * FROM warehouse_products WHERE id=$1",
      [id]
    );

    return result.rows[0];
  }

  // Get all products for a SINGLE warehouse by id
  static async allForWarehouseId(idWarehouse: string) {
    const result = await pgClient.query(
      "SELECT * FROM warehouse_products WHERE id_warehouse = $1",
      [idWarehouse]
    );

    return result.rows;
  }

  // Get all products for a SINGLE warehouse by id and calculate each product Size in warehouse
  static async allForWarehouseFullSizes(idWarehouse: string) {
    const result = await pgClient.query(
      `SELECT p."name", wp.amount, (p."size" * wp.amount) as  full_size, is_hazardous FROM warehouse_products wp
      INNER JOIN products p
      ON wp.id_product = p.id 
      WHERE wp.id_warehouse = $1`,
      [idWarehouse]
    );

    return result.rows;
  }

  // Inser a new product to warehouse 
  // if already existing
  // Increase amount
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
