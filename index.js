import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Import TypeDefs
import { typeDefs } from "./schema.js";


// Define your resolvers
const resolvers = {
  Query: {
    reviews: () => "Hello, world!",
  },
};

// Create an ApolloServer instance with your schema and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the standalone server
const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 },
});

console.log("Server started at", url);
