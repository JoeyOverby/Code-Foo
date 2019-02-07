
//Get the number of stairs argument


if(process.argv.length != 3){
	console.log("Invalid argument count, usage is: 'node app.js <number of stairs>");
	process.exit();
}

var numberOfStairs = parseInt(process.argv[2]);

if(isNaN(numberOfStairs)){
	console.log("Invalid input, argument count must be an integer.");
	process.exit();
}
console.log("Number Of Stairs: ", numberOfStairs);
console.log("Type is: ", typeof(numberOfStairs));

if(numberOfStairs < 1){
	console.log("ERROR: Number of stairs must be greater than 1");
	process.exit();
}

var answer = getNumberOfWays(numberOfStairs);

console.log("Answer: ", answer);

function getNumberOfWays(numberOfStairs){
	// console.log("getNumberOfWays(", numberOfStairs, ")");

	if(numberOfStairs == 1){
		return 1;
	}if(numberOfStairs == 2){
		return 2;
	}

	return getNumberOfWays(numberOfStairs-1) + getNumberOfWays(numberOfStairs-2);
}