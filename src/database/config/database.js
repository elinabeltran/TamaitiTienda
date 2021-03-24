require('dotenv').config()

module.exports = {
  "production": {
    "username": "elina",
    "password": "pacaPACA01!",
    "database": "elina_tamaiti_ddbb",
    "host": "mysql-elina.alwaysdata.net",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "development": {
    "username": "root",
    "password": null,
    "database": "db_tamaiti",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
