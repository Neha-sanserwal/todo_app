const { stdout } = process;
const formatOutput = (date, todos) => {
	formattedDateTodos = [date, ...todos].join("\n\t");
	return `${formattedDateTodos}\n`;
};
const listTodos = function(todoData) {
	for ([date, todos] of Object.entries(todoData)) {
		stdout.write(formatOutput(date, todos));
	}
};

exports.listTodos = listTodos;
