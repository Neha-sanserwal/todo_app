const { addTodos } = require("./src/addTodos");
const { listTodos } = require("./src/listTodos");
const { deleteDateTodo } = require("./src/deleteDateTodo.js");
const { handleReadFile } = require("./src/promises");
let actionRef = {
	add: addTodos,
	list: listTodos,
	delete: deleteDateTodo
};

let action = process.argv[2];
let date = process.argv[3];
handleReadFile
	.then(todoData => {
		todoData = JSON.parse(todoData);
		actionRef[action](todoData, date);
	})
	.catch(err => {
		console.log(err);
	});
