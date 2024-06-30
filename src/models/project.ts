import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Project extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
}

Project.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  description: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
}, {
  sequelize,
  tableName: 'projects',
});

export default Project;
