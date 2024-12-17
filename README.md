# Yara YaraWarehouses Documentation

This documentation provides information about the Yara Assignment Interview Task.

# Local Deployment

## Prerequisites

### Nodejs, Docker, PostgresSQL Editor (pgAdmin, DBeaver, etc..)

## Start up

- **Run Docker compose**: In the root folder open terminal (cmd, bash, etc..). Run the command: "docker-compose up -d" and wait for full initialization of all the services. Status can be checked with "docker ps" or through docker desktop UI.
- **Create and populate DB**: Open a terminal (inside dm_admin) and run the commands: "npm install", "node ./src/index.js"
- **Connect to DB**: Connect to DB using:
  ```json
  {
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    "database": "yara_assignment"
  }
  ```

# Database

![Yara assignment Db Shema image:](https://github.com/tozobg/YaraWarehouses/blob/main/db_admin/db_scema/db_diagram.PNG "yara_assignment Db shema")

# Testing

- **Apollo server**:
  Apollo server come with sandbox environment: http://localhost:4000/

# React

- **React app**:
  React app can be accessed at: http://localhost:3000/

# Apollo Endpoints

## Queries

### Products

**Description**:

- **products()**: Gets all of products
- **product(id: $productId)**: get a speciffic product by id

```
  query Products($productId: String) {
    products {
      id
      name
      size
      is_hazardous
    }
    product(id: $productId) {
      id
      name
      size
      is_hazardous
    }
  }
```

**Variables**
(Please copy a product id from products query (UUID/string))

```
{
  "productId": ""
}
```

### Warehouses

**Description**:

- **warehouses()**: Gets all warehouses
- **warehouse(id: $warehouseId)**: Gets a specific warehouse by id

```
query Warehouses($warehouseId: String) {
  warehouses {
    id
    name
    size
    is_hazardous
    last_date_empty
  }
  warehouse(id: $warehouseId) {
    id
    name
    size
    is_hazardous
  }
}
```

**Variables**
(Please copy a warehouse id from warehouses query (UUID/string))

```
{
  "warehouseId": ""
}
```

### Warehouses Products

**Description**:

- **warehousesProducts()**: Gets all warehouses products
- **warehouseProduct(id: $warehouseProductId)**: Gets a specific warehouse product by id
- **warehouseProducts(idWarehouse: $idWarehouse)**: Gets all products for a specific warehouse by id

```
query WarehousesProducts($warehouseProductId: String, $idWarehouse: String) {
  warehousesProducts {
    id
    id_warehouse
    id_product
    amount
  }
  warehouseProduct(id: $warehouseProductId) {
    id
    id_warehouse
    id_product
    amount
  }
  warehouseProducts(idWarehouse: $idWarehouse) {
    id
    id_warehouse
    id_product
    amount
  }
}
```

**Variables**
(Please copy a warehouseProductId and idWarehouse from warehousesProducts query (UUID/string))

```
{
  "warehouseProductId": "",
  "idWarehouse": ""
}
```

### Warehouses Products Movements

**Description**:

- **warehousesProductsMovements()**: Gets all warehouses products movements
- **warehouseProductsMovements(idWarehouse: $idWarehouse)**: Gets all products movements for a specific warehouse by id
- **warehouseProductMovement(idMovement: $idMovement)**: Gets a specific warehouse product movement by id

```
query WarehousesProductsMovements($idWarehouse: String, $idMovement: String) {
  warehousesProductsMovements {
    id
    id_warehouse
    id_product
    amount
    movement_type
    date
    is_future
  }
  warehouseProductsMovements(idWarehouse: $idWarehouse) {
    id
    id_warehouse
    id_product
    amount
    movement_type
    date
    is_future
  }
  warehouseProductMovement(idMovement: $idMovement) {
    id
    id_warehouse
    id_product
    amount
    movement_type
    date
    is_future
  }
}
```

**Variables**
(Please copy a idWarehouse and idMovement from warehousesProducts query (UUID/string))

```
{
  "idWarehouse": "",
  "idMovement": ""
}
```

## Mutations

### Create Products

**Description**:

- **createProduct()**: Creates a product inside products table

```
mutation Mutation($name: String!, $size: Int!, $isHazardous: Boolean!) {
  createProduct(name: $name, size: $size, isHazardous: $isHazardous) {
    id
    name
    size
    is_hazardous
  }
}
```

**Variables**
Size > 0

```
{
  "name": "Product ABC",
  "size": 5,
  "isHazardous": false
}
```

### Create Warehouse

**Description**:

- **createProduct()**: Creates a warehouse inside warehouses table

```
mutation Mutation($name: String!, $size: Int!) {
  createWarehouse(name: $name, size: $size) {
    id
    name
    size
    is_hazardous
    last_date_empty
  }
}
```

**Variables**
Size > 0

```
{
  "name": "Warehouse ABC",
  "size": 500
}
```

### Import Product

**Description**:

- **importProduct(idWarehouse: $idWarehouse, idProduct: $idProduct, amount: $amount, date: $date)**: Imports a product
- **checks**: 1. Hazardous or Non Hazardous, 2. If Is future import -> add product movement, 3. If NOT future import -> add amount to product, change warehouse hazardness, add product movement

```
mutation Mutation($idWarehouse: String!, $idProduct: String!, $amount: Int!, $date: String!) {
  importProduct(idWarehouse: $idWarehouse, idProduct: $idProduct, amount: $amount, date: $date) {
    id
    id_warehouse
    id_product
    amount
    movement_type
    date
    is_future
  }
}
```

**Variables**
(Please copy a idWarehouse and idProduct from products and warehouses queries (UUID/string))

```
{
  "idWarehouse": "",
  "idProduct": "",
  "amount": 20,
  "date": "2024-12-17 12:00:00.001"
}
```
