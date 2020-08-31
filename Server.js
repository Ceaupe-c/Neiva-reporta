const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const SELECT_ALL_USERS = "SELECT * FROM Usuario";

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "neivareporta",
});

/*connection.connect((err) => {
  if (err) {
    return err;
  }
});
*/
app.use(cors());

app.get("/", (req, res) => {
  res.send("vaya a /Usuario para ver usuarios xd");
});

app.get("/Usuario", (req, res) => {
  connection.query(SELECT_ALL_USERS, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results,
      });
    }
  });
});

app.listen(4000, () => {
  console.log("Escuchando en el puerto 4000");
});
