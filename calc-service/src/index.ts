import express, { Request, Response } from "express";
import { WarehouseEntity } from "./entities/WarehouseEntity";
import { ProductEntity } from "./entities/ProductEntity";
import { WarehouseProductSizeEntity } from "./entities/WarehouseProductSizeEntity";

const app = express();
const PORT = 3001;

app.use(express.json());

type CalcRequest = {
  warehouse: WarehouseEntity;
  product: ProductEntity;
  amount: number;
  warehouseProductsSizes: WarehouseProductSizeEntity[];
};

// CalcOne endpoint
app.post("/checkAvailability", (req: Request, res: Response) => {
  const { warehouse, product, amount, warehouseProductsSizes }: CalcRequest =
    req.body;

  // Calculate size taken by ALL products
  const takenSize = warehouseProductsSizes.reduce(
    (total, product) => total + product.full_size,
    0
  );

  // Add the size of the product
  const totalSize = takenSize + product.size * amount;

  // Compare availability
  const isAvailable = totalSize <= warehouse.size;

  res.json({ isAvailable: isAvailable });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
