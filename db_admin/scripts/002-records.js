const query = [
  // Insert warehouses
  `INSERT INTO "warehouses" (name, size, is_hazardous) VALUES ('Warehouse Block A', 1000, true);`,
  `INSERT INTO "warehouses" (name, size, is_hazardous) VALUES ('Warehouse Block B', 350, false);`,
  `INSERT INTO "warehouses" (name, size, is_hazardous) VALUES ('Warehouse Block C', 2500, null);`,

  // Insert general list of products is_hazardous = true
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Acetone', 10, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Hydrochloric Acid', 5, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Sodium Cyanide', 8, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Benzene', 12, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Mercury', 15, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Gasoline', 18, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Radioactive Waste', 3, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Chlorine Gas', 9, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Lead Paint', 14, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Radon Gas', 1, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Propane', 20, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Toluene', 9, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Fluorine Gas', 4, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Coal Tar', 8, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Formaldehyde', 7, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Nitroglycerin', 10, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Kerosene', 6, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Lye', 17, TRUE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Zinc Chloride', 19, TRUE);`,

  // Insert general list of products is_hazardous = false
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Fabric Softener', 9, FALSE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Air Freshener', 2, FALSE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Baking Soda', 18, FALSE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Washing Powder', 10, FALSE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Mouthwash', 4, FALSE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Cotton Swabs', 1, FALSE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Paper Towels', 20, FALSE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Plastic Wrap', 5, FALSE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Sponges', 8, FALSE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Dish Towels', 6, FALSE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Cloth Napkins', 9, FALSE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Trash Bags', 7, FALSE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Coffee Filters', 3, FALSE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Laundry Detergent', 10, FALSE);`,
  `INSERT INTO products (name, size, is_hazardous) VALUES ('Shaving Cream', 2, FALSE);`,

  // Insert warehouse movements for "Warehouse Block A", imports
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Acetone'), 'import', 1, '2024/12/12 10:00:00.001', false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Hydrochloric Acid'), 'import', 2, '2024/12/12 11:00:00.001', false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Sodium Cyanide'), 'import', 3, '2024/12/12 12:00:00.001', false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Benzene'), 'import', 1, now(), false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Mercury'), 'import', 2, now(), false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Gasoline'), 'import', 1, now(), false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Radioactive Waste'), 'import', 2, now(), false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Chlorine Gas'), 'import', 3, now(), false);`,

  // Insert warehouse movements for "Warehouse Block A", exports
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Acetone'), 'export', 1, now(), false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Hydrochloric Acid'), 'export', 1, now(), false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Sodium Cyanide'), 'export', 1, now(), false);`,

  // Insert warehouse current products for "Warehouse Block A"
  `INSERT INTO warehouse_products (id, id_warehouse, id_product, amount) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Hydrochloric Acid'), 1);`,
  `INSERT INTO warehouse_products (id, id_warehouse, id_product, amount) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Sodium Cyanide'), 2);`,
  `INSERT INTO warehouse_products (id, id_warehouse, id_product, amount) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Benzene'), 1);`,
  `INSERT INTO warehouse_products (id, id_warehouse, id_product, amount) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Mercury'), 2);`,
  `INSERT INTO warehouse_products (id, id_warehouse, id_product, amount) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Gasoline'), 1);`,
  `INSERT INTO warehouse_products (id, id_warehouse, id_product, amount) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Radioactive Waste'), 2);`,
  `INSERT INTO warehouse_products (id, id_warehouse, id_product, amount) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block A'), (SELECT id FROM products WHERE name = 'Chlorine Gas'), 3);`,

  // Insert warehouse movements for "Warehouse Block B", imports
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Fabric Softener'), 'import', 1, '2024/12/12 10:00:00.001', false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Mouthwash'), 'import', 2, '2024/12/12 11:00:00.001', false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Sponges'), 'import', 3, '2024/12/12 12:00:00.001', false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Dish Towels'), 'import', 1, now(), false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Fabric Softener'), 'import', 2, now(), false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Baking Soda'), 'import', 1, now(), false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Laundry Detergent'), 'import', 2, now(), false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Shaving Cream'), 'import', 1, now(), false);`,

  // Insert warehouse movements for "Warehouse Block B", exports
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Fabric Softener'), 'export', 1, now(), false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Mouthwash'), 'export', 1, now(), false);`,
  `INSERT INTO warehouse_products_movements (id, id_warehouse, id_product, movement_type, amount, date, is_future) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Sponges'), 'export', 1, now(), false);`,

  // Insert warehouse current products for "Warehouse Block B"
  `INSERT INTO warehouse_products (id, id_warehouse, id_product, amount) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Mouthwash'), 1);`,
  `INSERT INTO warehouse_products (id, id_warehouse, id_product, amount) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Sponges'), 2);`,
  `INSERT INTO warehouse_products (id, id_warehouse, id_product, amount) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Dish Towels'), 1);`,
  `INSERT INTO warehouse_products (id, id_warehouse, id_product, amount) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Fabric Softener'), 2);`,
  `INSERT INTO warehouse_products (id, id_warehouse, id_product, amount) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Baking Soda'), 1);`,
  `INSERT INTO warehouse_products (id, id_warehouse, id_product, amount) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Laundry Detergent'), 2);`,
  `INSERT INTO warehouse_products (id, id_warehouse, id_product, amount) VALUES (gen_random_uuid(), (SELECT id FROM warehouses WHERE name = 'Warehouse Block B'), (SELECT id FROM products WHERE name = 'Shaving Cream'), 1);`,
];

module.exports = { query };
