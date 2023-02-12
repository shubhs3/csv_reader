const multer = require("multer");
const path = require("path");
const csv = require("csv-parser");
const fs = require("fs");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../", "/uploads"));
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname + ".csv");
	},
});

function fileFilter(req, file, cb) {
	if (file.mimetype == "text/csv") {
		cb(null, true);
	} else {
		console.log("File is not csv file");
		cb(null, false);
	}
}

const upload = multer({ storage: storage, fileFilter: fileFilter }).single(
	"csv_file"
);

module.exports.upload = function (req, res) {
	console.log(req);

	upload(req, res, function (err) {
		if (err) {
			console.log("Multerr error===>>> ", err);
			return;
		}
		console.log("file uploaded");
		return res.redirect("back");
	});
};

module.exports.deleteFile = (req, res) => {
	let fileName = req.params.file;
	fs.unlink(`./uploads/${fileName}`, function (err) {
		if (err) return console.log(err);
		res.send("file deleted successfully");
	});
};

module.exports.openFile = (req, res) => {
	try {
		const fileName = req.params.file;
		const results = [];
		fs.createReadStream(`./uploads/${fileName}`)
			.pipe(csv())
			.on("data", (data) => results.push(data))
			.on("end", () => {
				return res.render("showData", {
					csvData: results,
					headers: Object.keys(results[0]),
				});
			});
	} catch (error) {
		console.log(error);
	}
};
