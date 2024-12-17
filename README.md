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

# Apollo Endpoints

## Queries

### Products

**Description**:

- **products**: Gets all of products
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

### Products

**Description**:

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

## Mutations

- **React**:
  React app can be accessed at: http://localhost:3000/
