const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/run", (req, res) => {
  const code = req.body.code;
  exec(`node -e "${code}"`, (error, stdout, stderr) => {
    if (error) {
      return res.json({ output: stderr });
    }
    res.json({ output: stdout });
  });
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));