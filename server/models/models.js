const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define( 'user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, unique: true},
    role: {type: DataTypes.STRING, defaultValue: "USER"},    
    currentQuestion: {type: DataTypes.INTEGER, defaultValue: 1},
});

const Location = sequelize.define('location', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
});

const Question = sequelize.define('question', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING, allowNull: false},
});

User.hasMany(Location)
Question.belongsTo(User);

User.hasMany(Question)
Question.belongsTo(User);

Location.hasOne(Question);
Question.belongsTo(Location);

module.exports = {
    User,
    Location,
    Question
}