// pages/about.tsx
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { GET_WAREHOUSE_PRODUCTS, GET_WAREHOUSES } from "../../lib/queries";
import { useState } from "react";

export default function WarehousePage() {
  const [selectedWarehouse, setSelectedWarehouse] = useState<string>("");
  const {
    loading: loadingWarehouses,
    error: errorWarehouses,
    data: warehouses,
  } = useQuery(GET_WAREHOUSES);
  const {
    loading: loadingWarehouseProducts,
    error: errorWarehouseProducts,
    data: warehouseProducts,
    refetch,
  } = useQuery(GET_WAREHOUSE_PRODUCTS, {
    variables: { idWarehouse: selectedWarehouse },
  });

  const handleWarehouseChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const warehouseId = event.target.value;
    setSelectedWarehouse(warehouseId);

    refetch();
  };

  console.log("warehouseProducts:", warehouseProducts);

  return (
    <div className="container">
      <h1>Warehouse Products management </h1>
      <Link href="/">Back to Product List</Link>

      <div>
        <label>Choose a warehouse:</label>
        <select
          id="warehouse"
          name="warehouse"
          required
          onChange={handleWarehouseChange}
          value={selectedWarehouse}
        >
          <option value="" disabled>
            Select a warehouse
          </option>
          {warehouses?.warehouses?.map((warehouse: any) => (
            <option key={warehouse.id} value={warehouse.id}>
              {warehouse.name}
            </option>
          )) || "Product list empty"}
        </select>
        <br />
        <br />

        {!loadingWarehouseProducts && !errorWarehouseProducts && (
          <table cellSpacing={20}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Id warehouse</th>
                <th>Id product</th>
                <th>Product amount</th>
              </tr>
            </thead>
            <tbody>
              {warehouseProducts?.warehouseProducts?.map((product: any) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.id_warehouse}</td>
                  <td>{product.id_product}</td>
                  <td>{product.amount}</td>
                </tr>
              )) || "Warehouse empty"}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
