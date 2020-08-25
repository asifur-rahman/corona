/*const express = require("express")
const  cors = require("cors")
const mongoose = require ("mongoose")
const corona = require("./models/corona")
const coronav= require(".models/corona")
mongoose.connect('mongodb://127.0.0.1:2701/coronasa',{useNewUrlParser:true})

mongoose.connection.once('open',()=>{
    console.log("Success")
})
const PORT = 4000;
const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    corona.find((err,coronas)=>{
        if(err){
            console.log(err)
        }else{
            res.json(coronas);
        }
    })
})
app.post("/create",(req,res)=>{
    const cor = new corona(req.body)
    cor.save().then((cor)=>{
        res.json.bind(cor);
    })
    .catch((err)=>{
        res.status(500).send(err.message);
    })
})
app.get("/:id",(req,res)=>{
    const id= req.params.id;
    corona.findById(id,(err,cor)=>{
        res.json(cor);
    })
})
app.listen(PORT,()=>{
    console.log("server is running on port"+PORT)
})*/

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/Todo");

mongoose.connect("mongodb://127.0.0.1:27017/todos", { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

app.post("/create", (req, res) => {
  const todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
});

/*app.post("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (!todo) {
      res.status(404).send("Todo not found");
    } else {
      todo.text = req.body.text;

      todo
        .save()
        .then((todo) => {
          res.json(todo);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});*/

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});