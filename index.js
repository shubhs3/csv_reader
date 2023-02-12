const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.static("./Assets"));

// set up express layouts
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

//extract style and scripts from subpages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// set up the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// parses incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));

// use express router
app.use("/", require("./Routes"));

app.listen(port, () => {
	console.log(`Running on port ${port}`);
});
