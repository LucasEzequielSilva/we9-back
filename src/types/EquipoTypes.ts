interface EquipoAttributes {
    id?: number;
    team_code?: string;
    team_name?: string;
    league?: string;
    country?: string;
    id_tecnico?: number;
    stars?: number;
    category?: string;
    primary_color?: string;
    formation?: string;
}

type EquipoCreationAttributes = Partial<EquipoAttributes>;

export { EquipoAttributes, EquipoCreationAttributes };

