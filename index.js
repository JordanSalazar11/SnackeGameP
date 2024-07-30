const express = require("express");
const mysql = require("mysql");
const path = require("path");

const app = express();

let connection = mysql.createConnection({
    host: "localhost",
    database: "databased",
    user: "root",
    password: ""
});

connection.connect(error => {
    if (error) {
        console.error("Error connecting to the database:", error);
        return;
    }
    console.log("Connected to the database.");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the JavaScript file
app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'JS', 'script.js'));
});

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index2.html'));
});

// Route POST to validate and store data
app.post("/validate", (req, res) => {
    const { nam: name, highscore: highScore } = req.body;

    // Input validation
    if (!name || highScore == null) {
        return res.status(400).json({ error: "Name and high score are required." });
    }

    // Query to insert a player with a highscore
    const save = "INSERT INTO new_of_players (name, highscore) VALUES (?, ?)";
    connection.query(save, [name, highScore], (error) => {
        if (error) {
            console.error("Error executing query:", error);
            return res.status(500).json({ error: "Error executing query." });
        }

        console.log("Data stored successfully.");
        res.send("Data stored successfully.");
    });
});

app.post("/update-high-score", (req, res) => {
    const { name, highScore } = req.body;

    // Input validation
    if (!name || highScore == null) {
        return res.status(400).json({ error: "Name and high score are required." });
    }

    // Query to update the high score for a player
    const query = "UPDATE new_of_players SET highscore = ? WHERE name = ?";
    connection.query(query, [highScore, name], error => {
        if (error) {
            console.error("Error executing query:", error);
            return res.status(500).json({ error: "Error executing query." });
        }

        console.log("High score updated successfully.");
        res.json({ message: "High score updated successfully." });
    });
});

// Start the server
app.listen(3500, () => {
    console.log("Server running at http://localhost:3500");
});

