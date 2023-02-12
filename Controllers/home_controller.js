const fs = require("fs");

module.exports.home = (req, res) => {
	// Read the uploads directory and return the list of CSV files
	fs.readdir("./uploads", function (err, files) {
		if (err) {
			return res.status(500).send(err);
		}
		res.render("home", { files });
	});
};
