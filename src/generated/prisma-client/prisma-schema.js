module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateBook {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Book {
  id: ID!
  createdAt: DateTime!
  title: String!
  image: String!
  author: String!
  price: String!
  ownedBy: User
}

type BookConnection {
  pageInfo: PageInfo!
  edges: [BookEdge]!
  aggregate: AggregateBook!
}

input BookCreateInput {
  id: ID
  title: String!
  image: String!
  author: String!
  price: String!
  ownedBy: UserCreateOneWithoutBooksInput
}

input BookCreateManyWithoutOwnedByInput {
  create: [BookCreateWithoutOwnedByInput!]
  connect: [BookWhereUniqueInput!]
}

input BookCreateWithoutOwnedByInput {
  id: ID
  title: String!
  image: String!
  author: String!
  price: String!
}

type BookEdge {
  node: Book!
  cursor: String!
}

enum BookOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  title_ASC
  title_DESC
  image_ASC
  image_DESC
  author_ASC
  author_DESC
  price_ASC
  price_DESC
}

type BookPreviousValues {
  id: ID!
  createdAt: DateTime!
  title: String!
  image: String!
  author: String!
  price: String!
}

input BookScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  price: String
  price_not: String
  price_in: [String!]
  price_not_in: [String!]
  price_lt: String
  price_lte: String
  price_gt: String
  price_gte: String
  price_contains: String
  price_not_contains: String
  price_starts_with: String
  price_not_starts_with: String
  price_ends_with: String
  price_not_ends_with: String
  AND: [BookScalarWhereInput!]
  OR: [BookScalarWhereInput!]
  NOT: [BookScalarWhereInput!]
}

type BookSubscriptionPayload {
  mutation: MutationType!
  node: Book
  updatedFields: [String!]
  previousValues: BookPreviousValues
}

input BookSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookWhereInput
  AND: [BookSubscriptionWhereInput!]
  OR: [BookSubscriptionWhereInput!]
  NOT: [BookSubscriptionWhereInput!]
}

input BookUpdateInput {
  title: String
  image: String
  author: String
  price: String
  ownedBy: UserUpdateOneWithoutBooksInput
}

input BookUpdateManyDataInput {
  title: String
  image: String
  author: String
  price: String
}

input BookUpdateManyMutationInput {
  title: String
  image: String
  author: String
  price: String
}

input BookUpdateManyWithoutOwnedByInput {
  create: [BookCreateWithoutOwnedByInput!]
  delete: [BookWhereUniqueInput!]
  connect: [BookWhereUniqueInput!]
  set: [BookWhereUniqueInput!]
  disconnect: [BookWhereUniqueInput!]
  update: [BookUpdateWithWhereUniqueWithoutOwnedByInput!]
  upsert: [BookUpsertWithWhereUniqueWithoutOwnedByInput!]
  deleteMany: [BookScalarWhereInput!]
  updateMany: [BookUpdateManyWithWhereNestedInput!]
}

input BookUpdateManyWithWhereNestedInput {
  where: BookScalarWhereInput!
  data: BookUpdateManyDataInput!
}

input BookUpdateWithoutOwnedByDataInput {
  title: String
  image: String
  author: String
  price: String
}

input BookUpdateWithWhereUniqueWithoutOwnedByInput {
  where: BookWhereUniqueInput!
  data: BookUpdateWithoutOwnedByDataInput!
}

input BookUpsertWithWhereUniqueWithoutOwnedByInput {
  where: BookWhereUniqueInput!
  update: BookUpdateWithoutOwnedByDataInput!
  create: BookCreateWithoutOwnedByInput!
}

input BookWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  price: String
  price_not: String
  price_in: [String!]
  price_not_in: [String!]
  price_lt: String
  price_lte: String
  price_gt: String
  price_gte: String
  price_contains: String
  price_not_contains: String
  price_starts_with: String
  price_not_starts_with: String
  price_ends_with: String
  price_not_ends_with: String
  ownedBy: UserWhereInput
  AND: [BookWhereInput!]
  OR: [BookWhereInput!]
  NOT: [BookWhereInput!]
}

input BookWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createBook(data: BookCreateInput!): Book!
  updateBook(data: BookUpdateInput!, where: BookWhereUniqueInput!): Book
  updateManyBooks(data: BookUpdateManyMutationInput!, where: BookWhereInput): BatchPayload!
  upsertBook(where: BookWhereUniqueInput!, create: BookCreateInput!, update: BookUpdateInput!): Book!
  deleteBook(where: BookWhereUniqueInput!): Book
  deleteManyBooks(where: BookWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  book(where: BookWhereUniqueInput!): Book
  books(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book]!
  booksConnection(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  book(where: BookSubscriptionWhereInput): BookSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  books(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  books: BookCreateManyWithoutOwnedByInput
}

input UserCreateOneWithoutBooksInput {
  create: UserCreateWithoutBooksInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBooksInput {
  id: ID
  name: String!
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  books: BookUpdateManyWithoutOwnedByInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneWithoutBooksInput {
  create: UserCreateWithoutBooksInput
  update: UserUpdateWithoutBooksDataInput
  upsert: UserUpsertWithoutBooksInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutBooksDataInput {
  name: String
  email: String
  password: String
}

input UserUpsertWithoutBooksInput {
  update: UserUpdateWithoutBooksDataInput!
  create: UserCreateWithoutBooksInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  books_every: BookWhereInput
  books_some: BookWhereInput
  books_none: BookWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    