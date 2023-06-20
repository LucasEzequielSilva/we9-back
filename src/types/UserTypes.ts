interface UserAttributes {
  id?: number;
  nombre?: string;
  email?: string;
  contraseña?: string;
  online?: boolean;
  equipo?: number;
  fecha_registro?: Date;
}

export { UserAttributes };
