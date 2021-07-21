const mongoose = require('mongoose');
//const db = process.env.DB_CONNECT;

//"mongodb+srv://apoulah:apoulah12@cluster0.mtf7u.mongodb.net/sollersdb?retryWrites=true&w=majority"

mongoose.connect(
    "mongodb+srv://apoulah:apoulah12@cluster0.mtf7u.mongodb.net/sollersdb?retryWrites=true&w=majority", 
    {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(()=>{
    console.log('DB Connection successful');
    }).catch(err => {
    console.log(err);
})