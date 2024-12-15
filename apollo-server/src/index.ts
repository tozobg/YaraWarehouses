import { ApolloServer, gql } from "apollo-server";
import axios from "axios";
import { Pool } from "pg";

// Set up PostgreSQL connection using pg
const pool = new Pool({
  //host: "localhost",
  host: "postgres",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "yara_assignment",
});

// GraphQL Type Definitions (Schema)
const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    size: Int!
    isHazardous: Boolean!
  }

  type Warehouse {
    id: ID!
    name: String!
    maxSize: Int!
  }

  type StockMovement {
    id: ID!
    product: Product!
    warehouse: Warehouse!
    type: String!
    quantity: Int!
    date: String!
  }

  type Query {
    products: [Product!]
    product(id: ID!): Product
    warehouses: [Warehouse!]
    warehouse(id: ID!): Warehouse
  }

  type Mutation {
    createProduct(name: String!, size: Int!, isHazardous: Boolean!): Product!
    createWarehouse(name: String!, maxSize: Int!): Warehouse!
  }
`;

// GraphQL Resolvers
const resolvers = {
  Query: {
    // Fetch all products
    products: async (): Promise<any[]> => {
      console.log("Called");
      try {
        // const response = await axios.post("http://calc-service:3000/calcOne", {
        //   num1: 1,
        //   num2: 2,
        // });

        // console.log("da response", response.data);
      } catch (error) {
        console.error(error);
      }

      try {
        const result = await pool.query("SELECT * FROM products");
        return result.rows;
      } catch (error) {
        console.log("error:", error);
      }
      return [];
    },
    // Fetch a single product by ID
    product: async (_: any, { id }: { id: string }): Promise<any> => {
      console.log("Called");
      const result = await pool.query("SELECT * FROM products WHERE id = $1", [
        id,
      ]);
      return result.rows[0];
    },
    // Fetch all warehouses
    warehouses: async (): Promise<any[]> => {
      console.log("Called");
      const result = await pool.query("SELECT * FROM warehouses");
      return result.rows;
    },
    // Fetch a single warehouse by ID
    warehouse: async (_: any, { id }: { id: string }): Promise<any> => {
      console.log("Called");
      const result = await pool.query(
        "SELECT * FROM warehouses WHERE id = $1",
        [id]
      );
      return result.rows[0];
    },
  },

  Mutation: {
    // Create a new product
    createProduct: async (
      _: any,
      {
        name,
        size,
        isHazardous,
      }: { name: string; size: number; isHazardous: boolean }
    ): Promise<any> => {
      const result = await pool.query(
        "INSERT INTO products (name, size, is_hazardous) VALUES ($1, $2, $3) RETURNING *",
        [name, size, isHazardous]
      );
      return result.rows[0];
    },
    // Create a new warehouse
    createWarehouse: async (
      _: any,
      { name, maxSize }: { name: string; maxSize: number }
    ): Promise<any> => {
      const result = await pool.query(
        "INSERT INTO warehouses (name, max_size) VALUES ($1, $2) RETURNING *",
        [name, maxSize]
      );
      return result.rows[0];
    },
  },
};

//Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }: { url: string }) => {
  console.log(`Server ready at ${url}`);
  console.log("blaa");
});

// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });

// .env file example:
// DB_HOST=localhost
// DB_PORT=5432
// DB_USER=your_db_user
// DB_PASSWORD=your_db_password
// DB_NAME=warehouse_db

// Database Setup (SQL):
// CREATE TABLE products (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(255) NOT NULL,
//   size INT NOT NULL,
//   is_hazardous BOOLEAN NOT
