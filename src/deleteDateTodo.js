const fs = require("fs");
const deleteDateTodo = function(todoData, date) {
	if (todoData[date]) {
		delete todoData[date];
	}
	fs.writeFileSync("mytodo.json", JSON.stringify(todoData), "utf8");
};

exports.deleteDateTodo = deleteDateTodo;
