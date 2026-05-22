const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Wajib agar FE React bisa akses
app.use(express.json()); // Agar bisa menerima request body JSON

// Routes
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server Back-End berjalan di http://localhost:${PORT}`);
});
