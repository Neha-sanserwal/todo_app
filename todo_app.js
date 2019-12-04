const fs = require("fs");
const { addTodos } = require("./src/addTodos");
const { listTodos } = require("./src/listTodos");
const { deleteDateTodo } = require("./src/deleteDateTodo.js");
let actionRef = {
	add: addTodos,
	list: listTodos,
	delete: deleteDateTodo
};

let action = process.argv[2];
let date = process.argv[3];
let todo_data = fs.readFileSync("./mytodo.json", "utf8");
let todoData = JSON.parse(todo_data);
actionRef[action](todoData, date);
