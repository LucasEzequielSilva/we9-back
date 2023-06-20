import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import JugadorAttributes from '../types/PlayerTypes'

class Jugador extends Model<JugadorAttributes> implements JugadorAttributes {
  public id!: number;
  public player_name!: string;
  public position!: string;
  public team_code!: string;
  public pie_habilidad!: string;
  public id_categoria!: number;
  public transfer_price!: number;
  public id_tecnico!: number;
  public transferible!: boolean;

  // Otras propiedades y métodos del modelo
}

Jugador.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    player_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    team_code: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    pie_habilidad: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'categorias', // Nombre de la tabla referenciada
          key: 'id', // Clave primaria de la tabla referenciada
        },
      },
    transfer_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    id_tecnico: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DTs', // Nombre de la tabla referenciada
          key: 'id', // Clave primaria de la tabla referenciada
        },
      },    transferible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: 'jugadores', // Nombre de la tabla en la base de datos
    sequelize, // Instancia de Sequelize previamente configurada
  }
);

export default Jugador;
