const { stdin, stdout } = process;
const fs = require("fs");
const addTodos = function(todoData) {
	stdin.setEncoding("utf-8");
	stdout.write("ENTER YOUR TODO. (Enter exit to save todos)\n");
	stdin.on("data", handleNewTodo.bind(this.newTodo, todoData));
};

const handleNewTodo = function(todoData, newTodo) {
	newTodo = newTodo.toString().trim();
	todoData = format(newTodo, todoData);
	fs.writeFile("mytodo.json", JSON.stringify(todoData), err => {
		if (err) console.error("Error occured while writting", err);
		console.info("Added");
	});
	stdin.pause();
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
