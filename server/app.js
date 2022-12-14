const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
  localhost: 3306,
  user: "root",
  password: "Qwerty@1234",
  database: "flexmoney",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const age = req.body.age;
  const mobilenumber = req.body.mobilenumber;
  const batch = req.body.batch;

  db.query(
    "SELECT * FROM users WHERE mobilenumber = ?",
    [mobilenumber],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result) {
          // console.log(result)
          if (result.length !== 0) {
            if (mobilenumber === result[0].mobilenumber)
              res.send("User already exist!!");
          } else {
            db.query(
              "INSERT INTO users (username, password, age, mobilenumber, batch) VALUES (?, ?, ?, ?, ?)",
              [username, password, age, mobilenumber, batch],
              (err, result) => {
                console.log(err);
              }
            );
            res.send("Account Created Successfully");
          }
        }
      }
    }
  );
});

app.post("/payment", (req, res) => {
  if (!req.body.user || !req.body.payment) {
    return res.status(400).send({ error: "Invalid user or payment data" });
  }

  storeUserData(req.body.user);
  storePaymentData(req.body.payment);

  const paymentResponse = CompletePayment(req.body.user, req.body.payment);

  if (paymentResponse.status === "success") {
    return res.send({ message: "Payment successful" });
  } else {
    return res.status(500).send({ error: "Error processing payment" });
  }
});

app.get("/", (req, res) => {
  res.send("hello amber");
});

app.listen(4000, () => {
  console.log("server is running on port no. 4000");
});
