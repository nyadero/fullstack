module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        avatar: {
            type: DataTypes.BLOB,
            allowNull: true,
        }
    });
    Users.associate = (models) => {
      Users.hasMany(models.Jobs, {
        onDelete: "cascade",
      });
    };
    return Users;
};