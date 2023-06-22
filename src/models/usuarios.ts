import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { UserAttributes } from '../types/UserTypes'
class Usuario extends Model<UserAttributes> {
  public id!: number;
  public name!: string;
  public email!: string;
  public contraseña!: string;
  public online!: boolean;
  public fecha_registro!: Date;
}

Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    alias: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    foto: {
      type: DataTypes.STRING, // Ajusta el tipo de dato según tus necesidades
    },
    equipo:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    contraseña: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    online: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
export default Usuario;
