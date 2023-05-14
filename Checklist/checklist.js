const express =require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({extended:true}));
let listItems = [];

let item;

 const today = new Date().toLocaleDateString();
  app.get("/", (req, res)=>{
    res.render("checklist" , {today:today, listItems:listItems});
    });
    
    app.post("/", (req, res) =>{
        item  = req.body.checklistitem;
      listItems.push(item);
      res.redirect("/");


      













































      9
    });
    app.listen(5000, ()=>{
        console.log("server at 5000");
    }); 


    
  