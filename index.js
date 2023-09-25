import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { mongoose } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const DB = process.env.DATABASE;

// Import TypeDefs
import { typeDefs } from "./schema.js";

// Define your resolvers
const resolvers = {
  Query: {
    reviews() {
      return "hello world";
    },
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

mongoose
  .connect(DB)
  .then(() => {
    console.log("Mongo Connected for Reviews DB");
  })
  .catch((error) => {
    console.log(error);
  });
