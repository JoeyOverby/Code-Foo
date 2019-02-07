

class PerimeterFinder{


	constructor(){
		this.paths = [];
	}

	/**
	 * Finds  the perimeter of the "island" 
	 */
	findPerimeter(input){
		var height = input.length;
		var width = input[0].length;

		console.log("Perimeter is: ");
	}
    
}



var fs = require('fs'); //Load the fs module

const inputFiles = ['input.json'];

perimeterFinder = new PerimeterFinder();
//While there will likely only be one file, needed to learn how to do this!
for(var index in inputFiles){
	let filePath = __dirname + "/" + inputFiles[index];
	let rawData = fs.readFileSync(filePath); 
	let fileObj = JSON.parse(rawData);

	console.log("Board: " , fileObj.board);
	perimeterFinder.findPerimeter(fileObj.board);
}
