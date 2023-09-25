import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { mongoose } from "mongoose";
import dotenv from "dotenv";
import ReviewModel from "./model/reviewModel.js";
dotenv.config();
const DB = process.env.DATABASE;

// Import TypeDefs
import { typeDefs } from "./schema.js";

// Define your resolvers
const resolvers = {
    Query: {
      async reviews() {
        try {
          const reviews = await ReviewModel.find();
          console.log(reviews);
          return reviews;
        } catch (error) {
          throw new Error("Failed to fetch reviews");
        }
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
