require("dotenv").config();
const express = require("express");
const cors = require("cors");
const urheilijaRoutes = require("./routes/urheilijaRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/urheilijat", urheilijaRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
