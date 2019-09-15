const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET, getUserId } = require("../utils");

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);

  const user = await context.prisma.createUser({ ...args, password });

  const token = jwt.sign({ userID: user.id }, APP_SECRET);

  return {
    token,
    user
  };
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user({ email: args.email });
  if (!user) {
    throw new Error("No such user found");
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userID: user.id }, APP_SECRET);

  return {
    token,
    user
  };
}

function addBook(parent, args, context, info) {
  const userId = getUserId(context);
  return context.prisma.createBook({
    title: args.title,
    image: args.image,
    author: args.author,
    price: args.price,
    ownedBy: { connect: { id: userId } }
  });
}

function updateBook(parent, args, context, info) {
  const book = context.prisma.books().find(book => book.id === args.id);
  return context.prisma.updateBook(
    (book.title = args.title || book.title),
    (book.image = args.image || book.image),
    (book.author = args.author || book.author),
    (book.price = args.price || book.price)
  );
}

function deleteBook(parent, args, context, info) {
  const book = context.prisma.books().find(book => book.id === args.id);
  // context.prismas.books().splice(book, 1);
  context.prismas.deleteBook(book().splice(book, 1));
}
module.exports = {
  signup,
  login,
  addBook,
  updateBook
};
