function books(parent, args, context) {
  return context.prisma.user({ id: parent.id }).books();
}

module.exports = {
  books
};
