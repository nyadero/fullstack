const express = require('express');
const cors = require('cors');
const app = express();

// port configuration
const port = process.env.PORT | 5000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// database configuration
const db = require('./models');

// users routes
const userRoutes = require('../server/server2/routes/userRoutes');
app.use('/users', userRoutes);

// jobs routes
const jobsRoutes = require('../server/server2/routes/jobsRoutes');
app.use('/jobs', jobsRoutes);

// connecting to the database
db.sequelize.sync().then(() => {
    app.listen(port, console.log(`App listening to port: ${port}`));
});
