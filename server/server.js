const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const todoRouter = require('./routes/todoRoutes');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandling.js');
const connectDb = require('./config/dbConnection');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

connectDb();

app.use('/api/todos', todoRouter);
app.use('/api/users', userRouter);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});







// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const userRouter = require('./routes/userRoutes');
// const todoRouter = require('./routes/todoRoutes');
// const dotenv = require("dotenv").config();
// const errorHandler = require("./middleware/errorHandling.js");
// const connectDb = require("./config/dbConnection");

// dotenv.config();

// const app = express();
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(cors());

// connectDb();  

// app.use('/api/todos', todoRouter);
// app.use("/api/users", userRouter);

// app.use(errorHandler);

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });


// // 
// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const userRouter = require('./routes/userRoutes');
// // const todoRouter = require('./routes/todoRoutes');
// // const dotenv = require("dotenv").config()
// // const errorHandler = require("./middleware/errorHandling.js");
// // const connectDb = require("./config/dbConnection")

// // dotenv.config();
// // const app = express();
// // app.use(bodyParser.json());
// // app.use(express.json())
// // app.use(cors());

// // connectDb()

// // app.use('/api/todos', todoRouter);
// // app.use("/api/users", userRouter)

// // app.use(errorHandler)

// // const port = process.env.PORT || 5000;

// // app.listen(port, () => {
// //     console.log(`Server running on port ${port}`)
// // })
