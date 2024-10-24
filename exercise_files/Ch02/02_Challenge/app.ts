interface ToDoItem {
	id: number;
	title: string;
	status: Status;
	completedOn?: Date;
}

enum Status {
	Done = "done",
	InProgress = "in-progress",
	ToDo = "todo",
}

const todoItems: ToDoItem[] = [
	{ id: 1, title: "Learn HTML", status: Status.Done, completedOn: new Date("2021-09-11") },
	{ id: 2, title: "Learn TypeScript", status: Status.InProgress },
	{ id: 3, title: "Write the best app in the world", status: Status.ToDo },
];

function addTodoItem(todo: string): ToDoItem {
	const id = getNextId(todoItems);

	const newTodo: ToDoItem = {
		id,
		title: todo,
		status: Status.ToDo,
	};

	todoItems.push(newTodo);

	return newTodo;
}

function getNextId<Type extends { id: number }>(items: Type[]): number {
	return items.reduce((max, x) => (x.id > max ? x.id : max), 0) + 1;
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app");

console.log(JSON.stringify(newTodo));
