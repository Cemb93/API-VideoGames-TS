'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db: any = {};
const { USER, PASSWORD, HOST, DATABASE, DEPLOY } = process.env;
const ConnectDb = `postgresql://${USER}:${PASSWORD}@${HOST}/${DATABASE}`;

let sequelize: any = new Sequelize(ConnectDb, {
    logging: false,
    native: false,
  }
);

fs.readdirSync(__dirname).filter((file: string) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts' ? '.ts' : '.js');
  })
  .forEach((file: string) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName: string) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
