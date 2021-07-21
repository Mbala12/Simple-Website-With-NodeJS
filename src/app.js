require('./db/conn');
const express = require('express');
const User = require('./models/usemessage');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');
const { registerPartials } = require('hbs');




//Setting the Path
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");
//console.log("Path is ", path.join(__dirname));

//Middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath)


//Routing
app.get('/', (req, res)=>{
    res.render('index')
});


app.post('/contact', async(req, res)=>{
    try{
        //res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("/");
    }catch(err){
        res.status(500).send(err);
    }
});

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
});