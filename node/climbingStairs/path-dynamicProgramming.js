
class NumberOfWays{


	constructor(){
        this.paths = [];
        this.answers = [];
	}
    

	getNumberOfWays(numberOfStairs, pathToHere){
		// console.log("getNumberOfWays(", numberOfStairs, ")");
		let path1 = pathToHere.slice(0);
		path1.push(1);

		let path2 = pathToHere.slice(0);
		path2.push(2);

		if(numberOfStairs == 1){
			this.paths.push(path1);
			return 1;
		}else if(numberOfStairs == 2){
			//Push the 2 steps left answer
			this.paths.push(path2);

			//And the other answer is 1 step + 1 step
			path1.push(1);
			this.paths.push(path1);
            
			return 2;
		}

		return this.getNumberOfWays(numberOfStairs-2, path2) + this.getNumberOfWays(numberOfStairs-1, path1);
	}

	getPaths(){
		return this.paths;
	}


}



//Get the number of stairs argument
if(process.argv.length != 3){
	console.log("Invalid argument count, usage is: 'node app.js <number of stairs>");
	process.exit();
}
var numberOfStairs = parseInt(process.argv[2]);

//Verify that it is a number
if(isNaN(numberOfStairs)){
	console.log("Invalid input, argument count must be an integer.");
	process.exit();
}
console.log("Number Of Stairs: ", numberOfStairs);

//Verify that the number is at least 1
if(numberOfStairs < 1){
	console.log("ERROR: Number of stairs must be greater than 1");
	process.exit();
}

//Find the answer
var ways = new NumberOfWays();
var answer = ways.getNumberOfWays(numberOfStairs, []);

console.log("Answer: ", answer);

let paths = ways.getPaths();
console.log("Paths: ");
console.log(paths);


