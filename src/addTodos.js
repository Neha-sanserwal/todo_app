const { stdin, stdout } = process;
const fs = require("fs");
const addTodos = function(todoData) {
	stdout.write("ENTER YOUR TODO. (Enter exit to save todos)\n");
	stdin.on("data", function(newTodo) {
		newTodo = newTodo.toString().trim();
		todoData = format(newTodo, todoData);
		fs.writeFileSync("mytodo.json", JSON.stringify(todoData));
		stdin.pause();
	});
};
const format = function(newTodo, todoData) {
	let date = new Date().toLocaleDateString();
	if (!todoData[date]) {
		todoData[date] = [newTodo];
		return todoData;
	}
	todoData[date].push(newTodo);
	return todoData;
};
exports.addTodos = addTodos;
