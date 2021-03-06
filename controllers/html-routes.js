const path = require("path");

module.exports = function(app){
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/portfolio", function(req,res){
        res.sendFile(path.join(__dirname, "../public/portfolio.html"));
    });

    app.get("/contactPage", function(req,res){
        res.sendFile(path.join(__dirname, "../public/contactPage.html"));
    });
}