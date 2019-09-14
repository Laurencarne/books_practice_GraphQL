const { GraphQLServer } = require("graphql-yoga");

let books = [
  {
    id: "1",
    title: "How to be Right",
    image:
      "https://cdn.waterstones.com/bookjackets/medium/9780/7535/9780753553121.jpg",
    author: "James O'Brien",
    price: "6.99"
  },
  {
    id: "2",
    title: "The Secret Commonwealth",
    image:
      "https://cdn.waterstones.com/override/v1/medium/9780/2413/9780241373330.jpg",
    author: "Philip Pullman",
    price: "15.99"
  },
  {
    id: "3",
    title: "The Mirror and the Light",
    image:
      "https://cdn.waterstones.com/override/v1/medium/9780/0083/9780008366704.jpg",
    author: "Hilary Mantel",
    price: "20.00"
  },
  {
    id: "4",
    title: "Donald Trump",
    image:
      "https://cdn.waterstones.com/override/v1/medium/9780/2414/9780241422724.jpg",
    author: "Jason Hazeley",
    price: "7.99"
  },
  {
    id: "5",
    title: "The Tattooist of Auschwitz",
    image:
      "https://cdn.waterstones.com/bookjackets/medium/9781/7857/9781785763670.jpg",
    author: "Heather Morris",
    price: "6.99"
  },
  {
    id: "6",
    title: "This is Going to Hurt",
    image:
      "https://cdn.waterstones.com/override/v2/medium/9781/5098/9781509858637.jpg",
    author: "Adam Kay",
    price: "6.99"
  },
  {
    id: "7",
    title: "The Librarian of Auschwitz",
    image:
      "https://cdn.waterstones.com/override/v1/medium/9781/5291/9781529104776.jpg",
    author: "Antonio Iturbe",
    price: "6.99"
  },
  {
    id: "8",
    title: "Cilka's Journey",
    image:
      "https://cdn.waterstones.com/override/v2/medium/9781/7857/9781785769047.jpg",
    author: "Heather Morris",
    price: "11.99"
  },
  {
    title: "An American Marriage",
    author: "Tayari Jones",
    price: "6.99",
    image:
      "https://cdn.waterstones.com/bookjackets/large/9781/7860/9781786075192.jpg",
    id: "9"
  },
  {
    title: "Normal People",
    author: "Sally Rooney",
    price: "6.99",
    image:
      "https://cdn.waterstones.com/bookjackets/medium/9780/5713/9780571334650.jpg",
    id: "10"
  },
  {
    title: "The Umbrella Mouse",
    author: "Anna Farger",
    price: "4.99",
    image:
      "https://cdn.waterstones.com/bookjackets/medium/9781/5290/9781529003970.jpg",
    id: "11"
  }
];

let idCount = books.length;

const resolvers = {
  Query: {
    allBooks: () => books,
    book: (parent, args) => books.find(book => book.id === args.id)
  },
  Mutation: {
    addBook: (parent, args) => {
      const book = {
        id: idCount++,
        title: args.title,
        image: args.image,
        author: args.author,
        price: args.price
      };
      books.push(book);
      return book;
    },
    updateBook: (parent, args) => {
      const book = books.find(book => book.id === args.id);
      book.title = args.title || book.title;
      book.image = args.image || book.image;
      book.author = args.author || book.author;
      book.price = args.price || book.price;
      return book;
    },
    deleteBook: (parent, args) => {
      const book = books.find(book => book.id === args.id);
      books.splice(book, 1);
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(() => console.log(`Server is running on localhost:4000`));
