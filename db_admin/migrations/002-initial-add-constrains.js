exports.up = (pgm) => {
  console.log(
    "Creating warehouse_products uniqie constrains on multiple columns"
  );
  pgm.addConstraint(
    { schema: "public", name: "warehouse_products" },
    "warehouse_products_uq",
    {
      unique: ["id_warehouse", "id_product"],
    }
  );
  console.log(
    "Successfully created"
  );
};

exports.down = (pgm) => {
  pgm.dropConstraint(
    { schema: "public", name: "warehouse_products" },
    "warehouse_products_uq",
    {
      ifExists: true,
    }
  );
};
