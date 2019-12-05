const fs = require("fs");
const handleReadFile = new Promise((resolve, reject) => {
	fs.readFile("mytodo.json", "utf8", (err, content) => {
		if (err) return reject(err);
		resolve(content);
	});
});

module.exports = {
	handleReadFile
};
