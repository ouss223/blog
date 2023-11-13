const express  = require("express");
const app = express();
const bodyParser=require("body-parser");
const { redirect } = require("express/lib/response");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+"/"));
app.set("view engine","ejs");


var itemss=["fruits"];
var contentt=["Bananas are berries, but strawberries aren't. In botanical terms, berries are defined as fleshy fruits produced from a single ovary, and bananas fit this definition. On the other hand, strawberries are considered aggregate fruits because they form from a flower with multiple ovaries. So, despite the common perception, bananas are technically berries, while strawberries are not."];

app.get("/adding",function(req,res){
    res.sendFile(__dirname+("/adding/adding.html"));
});
app.get("/",function(req,res){
    res.render(__dirname+"/views/main.ejs",{items:itemss,content:contentt});
});
app.get("/views",function(req,res){
    const i  = req.query.info1;
    console.log(i);
    res.render("full_reading",{title : itemss[i],cont:contentt[i]})
});


app.post("/adding",function(req,res){
    const title = req.body.title;
    const cont = req.body.cont;
    itemss.push(title);
    contentt.push(cont);
    res.redirect("/");
});
app.post("/views",function(req,res){
    res.redirect("/");
})


app.listen(3000,function(){
    console.log("connected to port 3000");
});