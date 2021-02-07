const express = require('express');
const app = express();

const userRoutes = require('./routes/user');
const urunRoutes = require('./routes/urun');


app.use(userRoutes);
app.use(urunRoutes);

app.listen(3000, ()=> {
    console.log('listening on port 3000');
});