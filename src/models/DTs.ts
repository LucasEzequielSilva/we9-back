import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface DTAttributes {
  id: number;
  nombre_dt: string;
  alias: string;
}

interface DTCreationAttributes extends Optional<DTAttributes, 'id'> {}

class DT extends Model<DTAttributes, DTCreationAttributes> implements DTAttributes {
  public id!: number;
  public nombre_dt!: string;
  public alias!: string;

  // Otras propiedades y métodos del modelo
}

DT.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre_dt: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    alias: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: 'DTs', // Nombre de la tabla en la base de datos
    sequelize, // Instancia de Sequelize previamente configurada
  }
);

export default DT;
