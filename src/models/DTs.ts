import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;

  // Otras propiedades y métodos del modelo
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    online: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    equipo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'equipos',
        key: 'id',
      },
    },
    fecha_registro: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'usuarios', // Nombre de la tabla en la base de datos
    sequelize, // Instancia de Sequelize previamente configurada
  }
);

export default User;
