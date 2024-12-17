// pages/about.tsx
import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import {
  GET_WAREHOUSE_PRODUCTS_FULL_SIZE,
  GET_WAREHOUSE_PRODUCTS_MOVEMENTS,
  GET_WAREHOUSES,
} from "../../lib/queries";
import { FormEventHandler, useState } from "react";
import { IMPORT_PRODUCTS } from "../../lib/mutations";

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
    refetch: refetchWarehouseProducts,
  } = useQuery(GET_WAREHOUSE_PRODUCTS_FULL_SIZE, {
    variables: { idWarehouse: selectedWarehouse },
  });
  const {
    loading: loadingWarehouseProductsMovements,
    error: errorWarehouseProductsMovements,
    data: warehouseProductsMovements,
    refetch: refetchWarehouseProductsMovements,
  } = useQuery(GET_WAREHOUSE_PRODUCTS_MOVEMENTS, {
    variables: { idWarehouse: selectedWarehouse },
  });

  const [
    mutateImportProduct,
    { data: dataCreate, loading: loadingCreate, error: errorCreate },
  ] = useMutation(IMPORT_PRODUCTS, {
    refetchQueries: [
      GET_WAREHOUSE_PRODUCTS_MOVEMENTS,
      GET_WAREHOUSE_PRODUCTS_FULL_SIZE,
    ],
  });

  const handleWarehouseChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const warehouseId = event.target.value;
    setSelectedWarehouse(warehouseId);

    await refetchWarehouseProducts();
    await refetchWarehouseProductsMovements();
  };

  let takenSize = 0;
  let warehouseSize = 0;

  if (!loadingWarehouseProducts && warehouseProducts) {
    takenSize = warehouseProducts.allForWarehouseFullSizes.reduce(
      (total: number, product: any) => total + product.full_size,
      0
    );

    warehouseSize = warehouses.warehouses.find(
      (wh: { id: string; name: string; size: number }) =>
        wh.id === selectedWarehouse
    ).size;
  }

  const handleImportSubmit: FormEventHandler<HTMLFormElement> = async (
    params
  ) => {
    params.preventDefault();

    const formData = new FormData(params.target as HTMLFormElement);

    const data = Object.fromEntries(formData.entries());

    const res = await mutateImportProduct({
      variables: {
        ...data,
        amount: Number(data.amount),
      },
    });

    (params.target as HTMLFormElement).reset();
  };

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
            Select a warehouse:
          </option>
          {warehouses?.warehouses?.map((warehouse: any) => (
            <option key={warehouse.id} value={warehouse.id}>
              {warehouse.name}
            </option>
          )) || "Product list empty"}
        </select>
        <br />
        <br />

        <div>Warehouse space: {warehouseSize}</div>
        <div>Warehouse space taken: {takenSize}</div>
        <div>Warehouse space left: {warehouseSize - takenSize}</div>
        <br />
        <br />

        <label>Warehouse products:</label>
        {!loadingWarehouseProducts && !errorWarehouseProducts && (
          <table cellSpacing={20}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Full size</th>
                <th>Is hazardous</th>
              </tr>
            </thead>
            <tbody>
              {warehouseProducts?.allForWarehouseFullSizes?.map(
                (product: any) => (
                  <tr key={product.name}>
                    <td>{product.name}</td>
                    <td>{product.amount}</td>
                    <td>{product.full_size}</td>
                    <td>{product.is_hazardous.toString()}</td>
                  </tr>
                )
              ) || "Warehouse empty"}
            </tbody>
          </table>
        )}
      </div>
      <div>
        <label>Warehouse products movements:</label>
        {!loadingWarehouseProductsMovements &&
          !errorWarehouseProductsMovements && (
            <table cellSpacing={20}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Id warehouse</th>
                  <th>Id product</th>
                  <th>Product amount</th>
                  <th>Movement type</th>
                  <th>Date</th>
                  <th>Is future</th>
                </tr>
              </thead>
              <tbody>
                {warehouseProductsMovements?.warehouseProductsMovements?.map(
                  (movement: any) => (
                    <tr key={movement.id}>
                      <td>{movement.id}</td>
                      <td>{movement.id_warehouse}</td>
                      <td>{movement.id_product}</td>
                      <td>{movement.amount}</td>
                      <td>{movement.movement_type}</td>
                      <td>{new Date(Math.floor(movement.date)).toString()}</td>
                      <td>{movement.is_future.toString()}</td>
                    </tr>
                  )
                ) || "Warehouse empty"}
              </tbody>
            </table>
          )}
        <br />
      </div>
      <div>
        <br />
        <label>Import a product:</label>
        <br />
        <form onSubmit={handleImportSubmit}>
          <label htmlFor="idWarehouse">Id warehouse:</label>
          <input type="text" id="idWarehouse" name="idWarehouse" required />
          <br />

          <label htmlFor="isHazardous">Id product:</label>
          <input type="text" id="idProduct" name="idProduct" />
          <br />

          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" required />
          <br />

          <label htmlFor="date">Date (yyyy-mm-dd):</label>
          <input type="text" id="date" name="date" required />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
