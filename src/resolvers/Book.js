function ownedBy(parent, args, context) {
  return context.prisma.book({ id: parent.id }).ownedBy();
}

module.exports = {
  ownedBy: ownedBy
};
