// const express = require("express");
// const cors = require("cors");
// const connectToReplicaSet = require("./database");
// require("dotenv").config();
// const path = require("path");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post("/api/jobs", async (req, res) => {
//   const { collection } = req.body;
//   try {
//     const dbConnection = await connectToReplicaSet();
//     const result = await dbConnection.loadCollection(collection);
//     if (result.flag) {
//       res
//         .status(200)
//         .send({ flag: true, message: result.message, data: result.data });
//     } else {
//       res.status(401).json({ flag: false, message: "No data found!" });
//     }
//   } catch (error) {
//     res.status(500).json({ flag: false, message: "Database connection error" });
//   }
// });

// app.post("/api/create-job", async (req, res) => {
//   const { data, collection } = req.body;

//   try {
//     const dbConnection = await connectToReplicaSet();
//     const result = await dbConnection.insertDocument(collection, data);
//     if (result.flag) {
//       res.status(200).json({ flag: true, message: result.message });
//     } else {
//       res.status(500).json({ flag: false, message: result.message });
//     }
//   } catch (error) {
//     res.status(500).json({ flag: false, message: "Database connection error" });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const connectToReplicaSet = require("./database");
require("dotenv").config();
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// ---- API Routes ----
app.post("/api/jobs", async (req, res) => {
  const { collection } = req.body;
  console.log(collection);

  try {
    const dbConnection = await connectToReplicaSet();
    const result = await dbConnection.loadCollection(collection);
    if (result.flag) {
      res
        .status(200)
        .send({ flag: true, message: result.message, data: result.data });
    } else {
      res.status(401).json({ flag: false, message: "No data found!" });
    }
  } catch (error) {
    res.status(500).json({ flag: false, message: "Database connection error" });
  }
});

app.post("/api/create-job", async (req, res) => {
  const { data, collection } = req.body;
  console.log(data, collection);

  try {
    const dbConnection = await connectToReplicaSet();
    const result = await dbConnection.insertDocument(collection, data);
    if (result.flag) {
      res.status(200).json({ flag: true, message: result.message });
    } else {
      res.status(500).json({ flag: false, message: result.message });
    }
  } catch (error) {
    res.status(500).json({ flag: false, message: "Database connection error" });
  }
});

// ---- Serve Frontend (React build) ----
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// ---- Start Server ----
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
