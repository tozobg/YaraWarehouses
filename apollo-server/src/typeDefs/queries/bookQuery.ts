import { gql } from "apollo-server";

const bookQuery = gql`
  type Query {
    books: [Book] 
  }
`;

export { bookQuery };
