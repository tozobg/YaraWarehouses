import axios from "axios";
import { WarehouseEntity } from "../entities/WarehouseEntity";
import { ProductEntity } from "../entities/ProductEntity";
import { WarehouseProductSizeEntity } from "../entities/WarehouseProductSizeEntity";

class CalcService {
  static async checkAvailability({
    warehouse,
    product,
    amount,
    warehouseProductsSizes,
  }: {
    warehouse: WarehouseEntity;
    product: ProductEntity;
    amount: number;
    warehouseProductsSizes: WarehouseProductSizeEntity;
  }) {
    const response = await axios.post(
      "http://calc-service:3000/checkAvailability",
      {
        warehouse: warehouse,
        product: product,
        amount: amount,
        warehouseProductsSizes: warehouseProductsSizes,
      }
    );

    return response;
  }
}

export { CalcService };
