const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "apartment",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// To fetch residents
app.get("/residents", (req, res) => {
  const sql = "SELECT * FROM Residents";

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching residents:", err);
      res.status(500).send("Error fetching residents");
    } else {
      res.status(200).json(result);
    }
  });
});

// Add endpoint to insert a new resident
app.post("/residents", (req, res) => {
  const { name, apartment_number, contact_number } = req.body;

  
  const sql =
    "INSERT INTO residents (name, apartment_number, contact_number) VALUES (?, ?, ?)";
  const values = [name, apartment_number, contact_number];
  db.query(sql, values, function (error, results, fields) {
    if (error) {
      console.log(error);
      res.status(500).send("Error inserting data into the booking table");
    } else {
      console.log("Data inserted successfully");
      res.status(201).send("Data inserted successfully");
    }
  });
});

//view visitors
app.get("/visitors", (req, res) => {
  const sql = `
    SELECT Visitors.*, Residents.name AS resident_name
    FROM Visitors
    JOIN Residents ON Visitors.resident_id = Residents.resident_id
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching visitors:", err);
      res.status(500).send("Error fetching visitors");
    } else {
      res.status(200).json(result);
    }
  });
});

// Add a visitor
app.post("/addVisitor", (req, res) => {
  const {
    visitor_name,
    apartment_number,
    contact_number,
    visit_date,
    resident_id,
    reason_for_visit,
  } = req.body;

  const sql =
    "INSERT INTO Visitors (visitor_name, apartment_number, contact_number, visit_date, resident_id, reason_for_visit) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [
    visitor_name,
    apartment_number,
    contact_number,
    visit_date,
    resident_id,
    reason_for_visit,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting visitor:", err);
      res.status(500).send("Error inserting visitor");
    } else {
      console.log("Visitor inserted successfully");
      res.status(201).send("Visitor inserted successfully");
    }
  });
});

// Get details of visitors to a particular resident
app.get("/visitorDetails/:resident_id", (req, res) => {
  const residentId = req.params.resident_id;
  const sql =
    "SELECT Visitors.*, Residents.name AS resident_name FROM Visitors JOIN Residents ON Visitors.resident_id = Residents.resident_id WHERE Visitors.resident_id = ?";

  db.query(sql, [residentId], (err, result) => {
    if (err) {
      console.error("Error fetching visitor details:", err);
      res.status(500).send("Error fetching visitor details");
    } else {
      res.status(200).json(result);
    }
  });
});

// Fetch visitor counts for all residents
app.get("/visitorCounts", (req, res) => {
  const sql =
    "SELECT Residents.resident_id, Residents.name AS resident_name, COUNT(Visitors.visitor_id) AS visitor_count FROM Residents LEFT JOIN Visitors ON Residents.resident_id = Visitors.resident_id GROUP BY Residents.resident_id";

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching visitor counts:", err);
      res.status(500).send("Error fetching visitor counts");
    } else {
      res.status(200).json(result);
    }
  });
});

// Exit details
app.get("/visitorExitDetails", (req, res) => {
  const sql = `
    SELECT Visitors.visitor_id, Visitors.visitor_name, VisitorExits.exit_date, VisitorExits.exit_time
    FROM Visitors
    LEFT JOIN VisitorExits ON Visitors.visitor_id = VisitorExits.visitor_id
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching visitor exit details:", err);
      res.status(500).send("Error fetching visitor exit details");
    } else {
      res.status(200).json(result);
    }
  });
});

//adding exit details manually
app.post("/addExit", (req, res) => {
  const { visitor_id, exit_date, exit_time } = req.body;

  const sql =
    "INSERT INTO VisitorExits (visitor_id, exit_date, exit_time) VALUES (?, ?, ?)";
  const values = [visitor_id, exit_date, exit_time];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting exit details:", err);
      res.status(500).send("Error inserting exit details");
    } else {
      console.log("Exit details inserted successfully");
      res.status(201).send("Exit details inserted successfully");
    }
  });
});

//start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
