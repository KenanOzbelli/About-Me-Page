module.exports = function(sequlize, Datatypes){
    const Info = sequlize.define("Info", {
        name:{
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        email:{
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len:[10]
            }
        }
    });
    return Info;
}