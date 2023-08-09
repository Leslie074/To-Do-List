import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
var tasks = [];

app.use(bodyParser.urlencoded({extended : true}));

//This will load up the page.
app.get("/" , (req,res) => {
    res.render("index.ejs");
});

//This will add the task recieved from the frontend into the backend array.
app.post("/submit" , (req,res) => {

    var task = req.body["task"];
    tasks.push(task);

    res.render("index.ejs" , {
        set_of_tasks : tasks,
    });

});

//This will remove the task from the backend array based on the index recieved from the frontend.
app.post("/update" , (req,res) => { 

    const delete_index = req.body.selected_index;
    tasks.splice(delete_index,1);

    res.render("index.ejs");

});

//This represents the port number on which the local server is hosted.
app.listen(port , ()=>{
    console.log(`Listening at port ${port}`);
});