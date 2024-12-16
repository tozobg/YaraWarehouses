exports.up = (pgm) => {
  // Create the warehouses table
  pgm.createTable("warehouses", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },
    name: { type: "varchar(255)", notNull: true },
    size: { type: "integer", notNull: true, check: "size > 0" },
    is_hazardous: {
      type: "boolean",
      notNull: false,
      default: null,
      comment: "NULL value if warehouse empty",
    }, // NULL value if warehouse is empty
    last_date_empty: { type: "timestamp", notNull: true, default: pgm.func("now()") },
  });

  // Create the products table
  pgm.createTable("products", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },
    name: { type: "varchar(255)", notNull: true },
    size: { type: "integer", notNull: true, check: "size > 0" },
    is_hazardous: { type: "boolean", notNull: true, default: false },
  });

  // Create the warehouse_products table
  pgm.createTable("warehouse_products", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },
    id_warehouse: {
      type: "uuid",
      notNull: true,
      references: '"warehouses"',
      onDelete: "NO ACTION",
    },
    id_product: {
      type: "uuid",
      notNull: true,
      references: '"products"',
      onDelete: "NO ACTION",
    },
    amount: { type: "integer", notNull: true, check: "amount > 0" },
  });

  // Create the warehouse_products_movements table
  pgm.createTable("warehouse_products_movements", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },
    id_warehouse: {
      type: "uuid",
      notNull: true,
      references: '"warehouses"',
      onDelete: "NO ACTION",
    },
    id_product: {
      type: "uuid",
      notNull: true,
      references: '"products"',
      onDelete: "NO ACTION",
    },
    movement_type: {
      type: "varchar(6)",
      notNull: true,
      comment: "Values: import/export",
    },
    amount: { type: "integer", notNull: true, check: "amount > 0" },
    date: { type: "timestamp", notNull: true, default: pgm.func("now()") },
    is_future: {
      type: "boolean",
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  // Drop the tables
  pgm.dropTable("warehouse_products");
  pgm.dropTable("warehouse_products_movements");
  pgm.dropTable("products");
  pgm.dropTable("warehouses");
};
