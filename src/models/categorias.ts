import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Categoria extends Model {
  public id!: number;
  public categoria!: string;

  // Otras propiedades y métodos del modelo
}

Categoria.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoria: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: 'categorias', // Nombre de la tabla en la base de datos
    sequelize, // Instancia de Sequelize previamente configurada
  }
);

export default Categoria;
