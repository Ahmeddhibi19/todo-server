 import express, { Application } from 'express';
import sequelize from './config/database';
import server from './apolloServer';
import cors from 'cors';

/*const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: ['Content-Type'], 
  };*/

const app: Application = express();

//app.use(cors(corsOptions));

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  sequelize.sync().then(() => {
    app.listen({ port: 4000 }, () => {
      console.log(`Server is running on http://localhost:4000${server.graphqlPath}`);
    });
  });
}

startServer();
  