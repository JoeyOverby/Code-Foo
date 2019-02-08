

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

		//Initialize an array that will be the sum of the number of land boxes around it.
		var numNeighbors = new Array(height+2).fill(0).map(() => new Array(width+2).fill(0));
		

		for(var heightIndex = 0; heightIndex < height; heightIndex++){
			numNeighborsHeightIndex =heightIndex+1;
			for(var widthIndex=0; widthIndex < width; widthIndex++){
				numNeighborsWidthIndex = widthIndex + 1; //We need to use this math so that we don't go out of bounds

				//If I'm a 1 or greater, add 1 to the 4 boxes around me
				if(input[heightIndex][widthIndex] === 1){
					numNeighbors[numNeighborsHeightIndex+1][numNeighborsWidthIndex] = numNeighbors[numNeighborsHeightIndex+1][numNeighborsWidthIndex] + 1;
					numNeighbors[numNeighborsHeightIndex-1][numNeighborsWidthIndex] = numNeighbors[numNeighborsHeightIndex-1][numNeighborsWidthIndex] + 1;
					numNeighbors[numNeighborsHeightIndex][numNeighborsWidthIndex+1] = numNeighbors[numNeighborsHeightIndex][numNeighborsWidthIndex+1] + 1;
					numNeighbors[numNeighborsHeightIndex][numNeighborsWidthIndex-1] = numNeighbors[numNeighborsHeightIndex][numNeighborsWidthIndex-1] + 1;
				}

				console.log(heightIndex + ","+ widthIndex + " = " + input[heightIndex][widthIndex] + " ");
			}
			console.log("");
		}

		//Print the neighbors count array
		for(var numNeighborsHeightIndex = 1; numNeighborsHeightIndex < height+1; numNeighborsHeightIndex++){
			var rowString = "";
			for(var numNeighborsWidthIndex=1; numNeighborsWidthIndex < width+1; numNeighborsWidthIndex++){
				rowString += numNeighbors[numNeighborsHeightIndex][numNeighborsWidthIndex] + " ";
			}
			console.log(rowString);
		}

		//Now run through the array and add up the number of neighbors and apply the math.
		var perimeter = 0;
		for(var numNeighborsHeightIndex = 1; numNeighborsHeightIndex < height+1; numNeighborsHeightIndex++){
			for(var numNeighborsWidthIndex=1; numNeighborsWidthIndex < width+1; numNeighborsWidthIndex++){
				switch(numNeighbors[numNeighborsHeightIndex][numNeighborsWidthIndex]){
					case 1:
					perimeter += 3
					break;
					case 2:
					perimeter +=2
					case 3: 
					perimeter +=1
					default:
					break;
				}
			}
			console.log(rowString);
		}

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
