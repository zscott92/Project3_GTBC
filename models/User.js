module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_tagline: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_summary: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        dateJoined: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    User.associate = function (models) {
        User.hasMany(models.Song, {
            onDelete: "cascade"
        });
    };

    return User;
};
