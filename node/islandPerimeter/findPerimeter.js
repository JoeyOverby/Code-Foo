

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

		//Print the board
				//Print the neighbors count array
				for(var heightIndex = 0; heightIndex < height; heightIndex++){
					var rowString = " ";
					for(var widthIndex=0; widthIndex < width; widthIndex++){
						rowString += input[heightIndex][widthIndex] + " ";
					}
					console.log(rowString);
				}

				console.log();


		//Initialize an array that will be the sum of the number of land boxes around it.
		var numNeighbors = new Array(height+2).fill(0).map(() => new Array(width+2).fill(0));
		var foundLocations = new Array();
		

		for(var heightIndex = 0; heightIndex < height; heightIndex++){
			var numNeighborsHeightIndex =heightIndex+1;
			for(var widthIndex=0; widthIndex < width; widthIndex++){
				var numNeighborsWidthIndex = widthIndex + 1; //We need to use this math so that we don't go out of bounds

				//If I'm a 1 or greater, add 1 to the 4 boxes around me
				if(input[heightIndex][widthIndex] === 1){
					//First mark this location as a found location
					foundLocations.push([heightIndex, widthIndex]);

					numNeighbors[numNeighborsHeightIndex+1][numNeighborsWidthIndex] = numNeighbors[numNeighborsHeightIndex+1][numNeighborsWidthIndex] + 1;
					numNeighbors[numNeighborsHeightIndex-1][numNeighborsWidthIndex] = numNeighbors[numNeighborsHeightIndex-1][numNeighborsWidthIndex] + 1;
					numNeighbors[numNeighborsHeightIndex][numNeighborsWidthIndex+1] = numNeighbors[numNeighborsHeightIndex][numNeighborsWidthIndex+1] + 1;
					numNeighbors[numNeighborsHeightIndex][numNeighborsWidthIndex-1] = numNeighbors[numNeighborsHeightIndex][numNeighborsWidthIndex-1] + 1;
				}

				//console.log(heightIndex + ","+ widthIndex + " = " + input[heightIndex][widthIndex] + " ");
			}
			//console.log("");
		}

		//Print the neighbors count array
		for(var numNeighborsHeightIndex = 0; numNeighborsHeightIndex < height+2; numNeighborsHeightIndex++){
			var rowString = "";
			for(var numNeighborsWidthIndex=0; numNeighborsWidthIndex < width+2; numNeighborsWidthIndex++){
				rowString += numNeighbors[numNeighborsHeightIndex][numNeighborsWidthIndex] + " ";
			}
			console.log(rowString);
		}

		if(foundLocations.length ===1){
			console.log("Perimeter = 4");
		}else{

			var perimeter = 0;

			foundLocations.forEach(function(location){
				let x = location[0];
				let y= location[1];
				let value = numNeighbors[x+1][y+1];
				switch(value){
					case 1:
						perimeter += 3;
					break;

					case 2:
						perimeter += 2;
					break;

					case 3: 
						perimeter += 1;
					break;

					default:
					break;
				}
			});
	
	
	
	
			//Now run through the array and add up the number of neighbors and apply the math.
			// var perimeter = 0;
			// for(var numNeighborsHeightIndex = 1; numNeighborsHeightIndex < height+1; numNeighborsHeightIndex++){
			// 	for(var numNeighborsWidthIndex=1; numNeighborsWidthIndex < width+1; numNeighborsWidthIndex++){
			// 		switch(numNeighbors[numNeighborsHeightIndex][numNeighborsWidthIndex]){
			// 			case 1:
			// 			if(input[numNeighborsHeightIndex-1][numNeighborsWidthIndex-1] === 1){
			// 				perimeter += 3;
			// 			}
			// 			break;
			// 			case 2:
	
			// 			if(input[numNeighborsHeightIndex-1][numNeighborsWidthIndex-1] === 1){
			// 				perimeter += 2;
			// 			}
			// 			break;
			// 			case 3: 
	
			// 			if(input[numNeighborsHeightIndex-1][numNeighborsWidthIndex-1] === 1){
			// 				perimeter += 1;
			// 			}
			// 			default:
			// 			break;
			// 		}
			// 	}
			// }
	
			console.log("Perimeter is: " + perimeter);
		}
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
