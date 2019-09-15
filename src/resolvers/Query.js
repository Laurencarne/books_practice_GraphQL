function allBooks(root, args, context, info) {
  return context.prisma.books();
}

function book(root, context, args, info) {
  return context.prisma.books().find(book => book.id === args.id);
}

module.exports = {
  allBooks,
  book
};
