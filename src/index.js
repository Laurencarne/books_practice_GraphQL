const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Book = require("./resolvers/Book");

const resolvers = {
  Query,
  Mutation,
  User,
  Book
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

server.start(() => console.log(`Server is running on localhost:4000`));

// let books = [
//   {
//     id: "1",
//     title: "How to be Right",
//     image:
//       "https://cdn.waterstones.com/bookjackets/medium/9780/7535/9780753553121.jpg",
//     author: "James O'Brien",
//     price: "6.99"
//   },
//   {
//     id: "2",
//     title: "The Secret Commonwealth",
//     image:
//       "https://cdn.waterstones.com/override/v1/medium/9780/2413/9780241373330.jpg",
//     author: "Philip Pullman",
//     price: "15.99"
//   },
//   {
//     id: "3",
//     title: "The Mirror and the Light",
//     image:
//       "https://cdn.waterstones.com/override/v1/medium/9780/0083/9780008366704.jpg",
//     author: "Hilary Mantel",
//     price: "20.00"
//   },
//   {
//     id: "4",
//     title: "Donald Trump",
//     image:
//       "https://cdn.waterstones.com/override/v1/medium/9780/2414/9780241422724.jpg",
//     author: "Jason Hazeley",
//     price: "7.99"
//   },
//   {
//     id: "5",
//     title: "The Tattooist of Auschwitz",
//     image:
//       "https://cdn.waterstones.com/bookjackets/medium/9781/7857/9781785763670.jpg",
//     author: "Heather Morris",
//     price: "6.99"
//   },
//   {
//     id: "6",
//     title: "This is Going to Hurt",
//     image:
//       "https://cdn.waterstones.com/override/v2/medium/9781/5098/9781509858637.jpg",
//     author: "Adam Kay",
//     price: "6.99"
//   },
//   {
//     id: "7",
//     title: "The Librarian of Auschwitz",
//     image:
//       "https://cdn.waterstones.com/override/v1/medium/9781/5291/9781529104776.jpg",
//     author: "Antonio Iturbe",
//     price: "6.99"
//   },
//   {
//     id: "8",
//     title: "Cilka's Journey",
//     image:
//       "https://cdn.waterstones.com/override/v2/medium/9781/7857/9781785769047.jpg",
//     author: "Heather Morris",
//     price: "11.99"
//   },
//   {
//     title: "An American Marriage",
//     author: "Tayari Jones",
//     price: "6.99",
//     image:
//       "https://cdn.waterstones.com/bookjackets/large/9781/7860/9781786075192.jpg",
//     id: "9"
//   },
//   {
//     title: "Normal People",
//     author: "Sally Rooney",
//     price: "6.99",
//     image:
//       "https://cdn.waterstones.com/bookjackets/medium/9780/5713/9780571334650.jpg",
//     id: "10"
//   },
//   {
//     title: "The Umbrella Mouse",
//     author: "Anna Farger",
//     price: "4.99",
//     image:
//       "https://cdn.waterstones.com/bookjackets/medium/9781/5290/9781529003970.jpg",
//     id: "11"
//   }
// ];
