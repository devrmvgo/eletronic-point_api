module.exports = (Sequelize, DataType) => {
  const Employee = Sequelize.define("employee", {

    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false
    },

    email: {
      type: Sequelize.STRING,
      allowNull: false
    },

    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },

    phone: {
      type: Sequelize.STRING
    },

    skills: {
      type: Sequelize.JSON,
      allowNull: false
    },

  });

  return Employee;
};