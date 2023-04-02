const express = require('express');
const app = express();
const db = require("./models");
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const categorieRouter = require("./routes/categorie.route"); 
const scategorieRouter = require("./routes/scategorie.route")
const article=require("./routes/article.route")
//BodyParser Middleware
app.use(express.json());
app.use(cors());
//cnx BD
db.sequelize.authenticate().then(() => {
    console.log('Connection to DB has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
app.get("/", (req, res) => {
    res.send("formation");
});
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
}); 
app.use('/api/categories',categorieRouter);
app.use('/api/scategories', scategorieRouter);
app.use('/api/articles',article);