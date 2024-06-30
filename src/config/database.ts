import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); 
console.log('Database Name:', process.env.DB_NAME);
console.log('Database User:', process.env.DB_USER);
console.log('Database Password:', process.env.DB_PASSWORD);
console.log('Database Host:', process.env.DB_HOST);

const db = process.env.DB_NAME as string;
const user = process.env.DB_USER as string;
const password = process.env.DB_PASSWORD as string;
const host = process.env.DB_HOST as string;

const sequelize = new Sequelize(db, user, password, {
  host: host,
  dialect: 'mysql',
  logging: console.log, 
});

export default sequelize;
