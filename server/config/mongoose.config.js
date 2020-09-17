const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connection to database succesfully established'))
    .catch(err => console.log("Something went wrong"))
