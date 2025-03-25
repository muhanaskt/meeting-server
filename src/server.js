//src/server.js
const app = require("./app"); // Import app.js
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
