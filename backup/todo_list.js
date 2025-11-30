console.log('connected.. ');
var todos = ["Buy a gun"];

function addNewTodo(){
	//ask for new todo
	var newTodo = prompt("Add a new todo");
		//add to todos array
		todos.push(newTodo);
		console.log("Added todo: " +newTodo);
	}


function deleteTodo(){
	var index = prompt("Enter index of todo to be deleted")
	//delete that todo
	//use splice() to delete
	todos.splice(index,1);
	console.log("Deleted todo :" +index);
}

function displayList(){
	console.log('*****************')
	todos.forEach(function(todo,i){
		console.log(i + ": " +todo);
	});
	console.log('*****************')
}


var input = prompt("what would you like to do?");

// put all of your JS code from the lecture here
window.setTimeout(function() {
	while (input !== "quit"){
		//console.log("inside the while...");
	//handle input
	if(input === "list"){
		displayList();
	}
	else if (input==="new"){
		//ask for new todo
		addNewTodo();
	}
	else if (input === "delete"){
		//ask for index of todo to be deleted
		deleteTodo();
	}

	//ask again for the new input
	input = prompt("what would you like to do?");

}

console.log("ok!you quit the app");

}, 500);
