const db = require("../models");

module.exports = function(app){
    app.get("/api/data", function(req, res){
        db.Info.findAll({}).then(function(dbInfo){
            res.json(dbInfo);
        });
    })

    app.post("/api/posts", function(req, res){
        db.Info.create({
            name:req.body.name,
            email: req.body.email
        }).then((dbInfo) =>{
            res.send(dbInfo);
        });
    });
}
