import { Sequelize } from 'sequelize';

// Configuración de la conexión con la base de datos
const sequelize = new Sequelize('nombre_de_la_base_de_datos', 'nombre_de_usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql',
});

// Verificar la conexión con la base de datos
async function conectarBaseDeDatos() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa con la base de datos');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
}

// Exportar la instancia de Sequelize y la función de conexión para su uso en otros archivos
export { sequelize, conectarBaseDeDatos };
