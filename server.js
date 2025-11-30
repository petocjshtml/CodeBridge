const express = require("express");
const cors = require("cors");

// ROUTE MODULE IMPORTS
const fileRoutes = require("./routes/fileRoutes");
const terminalRoutes = require("./routes/terminalRoutes");
const historyRoutes = require("./routes/historyRoutes");
const actionLoggerRoutes = require("./routes/actionLoggerRoutes");

const app = express();

// CORS CONFIG
app.use(
  cors({
    origin: [
      "https://chat.openai.com",
      "chrome-extension://*",
      "http://localhost:3001",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json({ limit: "25mb" }));

// BASIC REQUEST LOGGER
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// ROUTES MOUNTING
app.use("/files", fileRoutes);
app.use("/terminal", terminalRoutes);
app.use("/history", historyRoutes);
app.use("/action-logs", actionLoggerRoutes);

// HEALTH CHECK
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

// START SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
