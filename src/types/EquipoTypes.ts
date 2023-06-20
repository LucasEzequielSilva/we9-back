import { DataTypes } from 'sequelize';

interface EquipoAttributes {
    id: number;
    teamCode: string;
    teamName: string;
    league: string;
    country: string;
    manager: string;
    stars: number;
    category: string;
    primaryColor: string;
    formation: string;
}

type EquipoCreationAttributes = Partial<EquipoAttributes>;

export { EquipoAttributes, EquipoCreationAttributes };

