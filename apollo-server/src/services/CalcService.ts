import axios from "axios";
import { WarehouseEntity } from "../entities/WarehouseEntity";
import { ProductEntity } from "../entities/ProductEntity";
import { WarehouseProductSizeEntity } from "../entities/WarehouseProductSizeEntity";

class CalcService {
  // Call 3rd party IPI for size availability check
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
    // Axios call to 3rd party API
    const response = await axios.post(
      "http://calc-service:3001/checkAvailability",
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
