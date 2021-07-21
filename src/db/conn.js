const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://XXXXXX:XXXXX-XXXXXXX@cluster0.mtf7u.mongodb.net/XXXXXXXX?retryWrites=true&w=majority", 
    {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(()=>{
    console.log('DB Connection successful');
    }).catch(err => {
    console.log(err);
})
