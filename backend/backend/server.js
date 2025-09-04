const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { exec } = require("child_process");

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
