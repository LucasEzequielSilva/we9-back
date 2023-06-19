import { Model, Optional } from 'sequelize';
import { EquipoAttributes } from './EquipoTypes';

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  online: boolean;
  equipo: number;
  fecha_registro: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'online' | 'fecha_registro'> {}

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

export { UserAttributes, UserCreationAttributes, UserInstance };
