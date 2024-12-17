// pages/index.tsx
import { useQuery, useMutation } from "@apollo/client";
import { GET_PRODUCTS, GET_WAREHOUSE_PRODUCTS } from "../../lib/queries";
import Link from "next/link";
import { CREATE_PRODUCTS } from "../../lib/mutations";
import { FormEventHandler } from "react";

const DefaultPage = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [
    mutateCreateProduct,
    { data: dataCreate, loading: loadingCreate, error: errorCreate },
  ] = useMutation(CREATE_PRODUCTS, {
    refetchQueries: [GET_PRODUCTS],
  });

  const handleProductSubmit: FormEventHandler<HTMLFormElement> = async (
    params
  ) => {
    params.preventDefault();

    const formData = new FormData(params.target as HTMLFormElement);

    const data = Object.fromEntries(formData.entries());

    const res = await mutateCreateProduct({
      variables: {
        ...data,
        isHazardous: data.isHazardous === "on",
        size: Number(data.size),
      },
    });

    (params.target as HTMLFormElement).reset();
  };

  return (
    <div>
      <h1>Warehouse Products</h1>

      {/* The link is shown regardless of loading or error state */}
      <Link href="/warehouse">Go to Warehouse Page</Link>
      <br />
      <br />
      <br />

      <form onSubmit={handleProductSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />

        <label htmlFor="isHazardous">Is Hazardous:</label>
        <input type="checkbox" id="isHazardous" name="isHazardous" />
        <br />

        <label htmlFor="size">Size:</label>
        <input type="number" id="size" name="size" required />
        <br />

        <button type="submit">Submit</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {errorCreate && <p>Error: {errorCreate.message}</p>}

      {/* Only render the product list if no loading/error */}
      {!loading && !error && (
        <table cellSpacing={20}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Size</th>
              <th>Is hazardous</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data?.products?.map((product: any) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.size}</td>
                <td>{product.is_hazardous.toString()}</td>
                <td>{product.name}</td>
              </tr>
            )) || "Product list empty"}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DefaultPage;
