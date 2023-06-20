interface UserAttributes {
  id?: number;
  nombre?: string;
  email?: string;
  contraseña?: string;
  online?: boolean;
  alias?: boolean;
  foto?: string;
  equipo?: number;
  fecha_registro?: Date;
}

export { UserAttributes };
