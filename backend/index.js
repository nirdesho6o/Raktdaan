const express =require('express');
const sequelize = require('./config/database');
const serviceRoutes= require('./Routes/serviceRoutes');
const TeamRouting =require('./Routes/ourTeamRouting');
const contactRouting=require('./Routes/contactRouting');
const donorController=require('./Routes/DonorRouting');
const app=express();
const path=require('path');
const cors=require('cors');
const bodyParser = require('body-parser'); 

sequelize.sync()
.then(() => {
console.log('Database & tables synced!');
})
.catch(err => {
console.error('Error syncing database:', err);
});
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(bodyParser.json()); // To parse incoming JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',serviceRoutes)
app.use('/api',TeamRouting);
app.use('/api',contactRouting);
app.use('/api',donorController);

app.listen(4000);