
houseValues = [1,2,2,6,0,0,10,2,10,3];

class HouseRobber{


	constructor(){
		this.paths = [];
	}
    

    //[0,1,2,3,4,5,6,7]
	getBestPath(optionsLeft){
		// console.log("getNumberOfWays(", numberOfStairs, ")");
        
        if(optionsLeft.length === 1){
            return optionsLeft[0];
        }

        var currentBest = 0;
        for(let i=0;i<optionsLeft.length-1;i++){
            var tempOptions = optionsLeft.slice();
            var leftOptions = [];
            var rightOptions = [];
            //Remove (i-1)
            if(i>0){
                leftOptions = optionsLeft.slice(0,i-1);
            }

            //remove i - House we are robbing
            
            if(i< optionsLeft.length-2){
                rightOptions = optionsLeft.slice(i+2)
            }
            
            //remove i+1
            
            tempOptions = [...leftOptions,...rightOptions];

            var answer = this.getBestPath(tempOptions);

            if(answer+optionsLeft[i] > currentBest){
                currentBest = answer + optionsLeft[i];
            }

            //remove i
            //eremove array[i-1]
            //

        }

        return currentBest;

		
	}

	getPaths(){
		return this.paths;
	}


}

houseRobber = new HouseRobber();

var answer = houseRobber.getBestPath(houseValues);

console.log("Answer is: ", answer);




