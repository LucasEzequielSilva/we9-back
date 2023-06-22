import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { EquipoAttributes } from '../types/EquipoTypes';
import Usuario from './usuarios';

class Equipo extends Model<EquipoAttributes> {
  public id!: number;
  public team_name!: string;
  public league!: string;
  public country!: string;
  public id_tecnico!: number;
  public stars!: number;
  public category!: string;
  public primary_color!: string;
  public formation!: string;
}

Equipo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      defaultValue: null
    },
    team_name: {
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
    id_tecnico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },    
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    primary_color: {
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
    sequelize,
    // Instancia de Sequelize previamente configurada
    modelName: 'Equipo',
    timestamps: true, // Habilita los timestamps
    updatedAt: 'updatedAt', // Personaliza el nombre de la columna updatedAt
    createdAt: 'createdAt', // Personaliza el nombre de la columna createdAt
  }
);

export default Equipo;
