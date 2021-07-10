module.exports = (sequelize, DataTypes) => {
    const Jobs = sequelize.define("Jobs", {
      job_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      job_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      job_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      job_category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      job_qualification: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      job_location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      job_salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      job_experience: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Jobs;
};