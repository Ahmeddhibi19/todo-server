import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Project from './project';

class Task extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public status!: string;
  public dueDate!: Date;
  public projectId!: number;
}

Task.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  description: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  status: {
    type: new DataTypes.ENUM('to do', 'doing', 'done'),
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  projectId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'tasks', 
});

Task.belongsTo(Project, { foreignKey: 'projectId', onDelete: 'CASCADE' }); // Cascade deletion setup
Project.hasMany(Task, { foreignKey: 'projectId', onDelete: 'CASCADE' }); // Cascade deletion setup

export default Task;
