// pages/index.tsx
import { useQuery } from "@apollo/client";
import { GET_WAREHOUSE_PRODUCTS } from "../../lib/queries";
import Link from "next/link";

const WarehousePage = () => {
  const { loading, error, data } = useQuery(GET_WAREHOUSE_PRODUCTS, {
    variables: { idWarehouse: "82db46b8-ebfd-405d-a530-46639e8a2f65" },
  });

  return (
    <div>
      <h1>Warehouse Products</h1>

      {/* The link is shown regardless of loading or error state */}
      <Link href="/about">Go to About Page</Link>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {/* Only render the product list if no loading/error */}
      {!loading && !error && (
        <ul>
          {(data?.warehouseProducts || []).map((product: any) => (
            <li key={product.id}>
              <strong>Product ID:</strong> {product.id_product},
              <strong>Amount:</strong> {product.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WarehousePage;
