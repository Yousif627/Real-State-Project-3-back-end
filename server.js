const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');


const propertyRoutes = require('./routes/propertyRoutes');
const areaRoutes = require('./routes/areaRoutes')

dotenv.config();
const app = express();



mongoose.connect(process.env.DB_URI)
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB'); 
});


// app.use(cors({ origin: 'http://localhost:5173' })); 
app.use(express.json());
app.use(morgan('dev'));
app.use('/property', propertyRoutes);
app.use('/area',areaRoutes )

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});