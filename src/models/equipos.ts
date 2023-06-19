import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Equipo extends Model {
  public id!: number;
  public teamCode!: string;
  public teamName!: string;
  public league!: string;
  public country!: string;
  public manager!: string;
  public stars!: number;
  public category!: string;
  public primaryColor!: string;
  public formation!: string;

  // Otras propiedades y métodos del modelo
}

Equipo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    teamCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    teamName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    league: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    manager: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    primaryColor: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    formation: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: 'equipos', // Nombre de la tabla en la base de datos
    sequelize, // Instancia de Sequelize previamente configurada
  }
);

export default Equipo;
