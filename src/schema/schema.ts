import { gql } from 'apollo-server-express';

const schema = gql`
  type Project {
    id: ID!
    name: String!
    description: String!
    tasks: [Task!]!
  }

  type Task {
    id: ID!
    title: String!
    description: String!
    status: String!
    dueDate: String!
    projectId: ID!
    project: Project!
  }

  type Query {
    getProjects: [Project!]!
    getProject(id: ID!): Project
    getTasks: [Task!]!
    getTask(id: ID!): Task
  }

  input ProjectInput {
    name: String!
    description: String!
  }

  input TaskInput {
    title: String!
    description: String!
    status: String!
    dueDate: String!
    projectId: ID!
  }

  type Mutation {
    createProject(input: ProjectInput): Project
    updateProject(id: ID!, input: ProjectInput): Project
    deleteProject(id: ID!): String
    createTask(input: TaskInput): Task
    updateTask(id: ID!, input: TaskInput): Task
    deleteTask(id: ID!): String
  }
`;
export default schema;
