//retrieving an element from an element
var colors = ["red","orange","yellow"];
console.log(colors[2]);


//updating an array index
colors[1]="blue"

//initializing an empty array
var friends1 = [];
var friends2 = new Array();
console.log(friends1,friends2)

//array can hold multiple/any data types 
var random_collection = [1,2,3,4,true,"sm"];
console.log(random_collection)


console.log("************************************")

const indianCricketPlayers = [
  "Rohit Sharma",
  "Virat Kohli",
  "Jasprit Bumrah",
  "KL Rahul",
  "Hardik Pandya",
  "Ravindra Jadeja",
  "Shubman Gill",
  "Rishabh Pant",
  "Kuldeep Yadav",
  "Suryakumar Yadav"
];

//simple for loops 
console.log("this is simple for loop")
for(var i=0;i<indianCricketPlayers.length;i++){
    console.log(indianCricketPlayers[i])
}

console.log("************************************")

//forEach
console.log("displaying a forEach loop....")
indianCricketPlayers.forEach(function(player){
    console.log(player)
})


console.log("************************************")
console.log("Q1: creating object...........")
//Question 1
//create student object with name, age and grade

// Create an Object
const student = {
  name: "Sujay",
  age: 41,
  grade: 'A'
};

console.log (student.age)


console.log("************************************")
console.log("Q2: using for loop to access obj props.....")
//accessing all properties of an object using for loop
console.log("using for loop to access properties of an object...")
for (let key in student){
  console.log("key: " +student[key]);
}


console.log("************************************")

let car = {
  brand: "Honda",
  model: "City"
}

car.year=2020;

console.log(car);

console.log("************************************")

//accessing array of movie objects...
console.log("accessing array of movie objects...")


var movies = [

	{title:"terminator",rating:"5",hasWatched:"yes"},
	{title:"rocky",rating:"5",hasWatched:"yes"},
	{title:"shawshank redemption",rating:"5",hasWatched:"no"},
	{title:"shawshank redemption",rating:"5",hasWatched:"no"},
	{title:"thor",rating:"4",hasWatched:"yes"},
	{title:"iron man",rating:"4",hasWatched:"yes"},
	{title:"pan singh tomar",rating:"5",hasWatched:"yes"},
	];


function displayMoviePreferences(){
	movies.forEach(function(movie){
		var watchString = "";
		if (movie.hasWatched === "yes"){
			watchString = "watched";
		} else if (movie.hasWatched === "no"){
			watchString = "not watched";
		} 

		console.log("***********************");
		console.log("You have "+watchString+ " the movie " +movie.title+ " which is rated" +movie.rating);
		console.log("***********************");
	})
}

console.log("what are my movie preferences?");
displayMoviePreferences();
