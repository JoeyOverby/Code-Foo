<?php declare(strict_types=1);
/**
 * Created by Joey Overby
 * Email: Joey.Overby@MadWireMedia.com
 * Date: 2019-01-22
 * Time: 08:58
 */


include_once "../../ChallengeHelpers.php";



$stockAnalyzer = new StockAnalyzer();
$stockAnalyzer->run();




/**
 * Class StockAnalyzer
 *
 *
 */
class StockAnalyzer {


    /**
     * The idea is to do this in two passes, to avoid a lot of comparisons.
     *
     * In the first pass we create a "Maximum Following Number" array.
     * This is an array that has the largest number from that location and on. (So you can calculate what the maximum sale would be if you bought at this point)
     *
     * Then we go through the array once more and calculate the difference between buying at that day (purchase price) and the largest sale that it could be.
     */
    public function run() {
        //Get input arrays
        $inputs = ChallengeHelpers::readFileIntoArray("./Input.txt", " ");


        for($i = 0; $i< count($inputs); $i++){
            echo "Analyzing Problem #" . $i . PHP_EOL;
            echo "Input: [" . implode(", ", $inputs[$i]) . "]" . PHP_EOL;

            /** @var int[] $input */
            $input = $inputs[$i];

            //For each input, create the largest max following array
            $numDays = count($input);
            $maxFollowing[$numDays-1] = $input[$numDays-1]; //The last element must have a maximum value of itself since nothing follows it.

            for($maxIndex = $numDays-2; $maxIndex>=0 ; $maxIndex--){
                if($input[$maxIndex] > $maxFollowing[$maxIndex+1]){
                    $maxFollowing[$maxIndex] = $input[$maxIndex];
                }else{
                    $maxFollowing[$maxIndex] = $maxFollowing[$maxIndex+1];
                }
            }

            //sort
            $largestDiff = 0;
            //Run through the actual input one more time forward to find the answer
            for($dayIndex = 0; $dayIndex< $numDays; $dayIndex++){
                $maxSale = $maxFollowing[$dayIndex] - $input[$dayIndex];
                if( $maxSale > $largestDiff){
                    $largestDiff = $maxSale;
                }
            }

            echo "Largest Sale: " . $largestDiff . PHP_EOL . PHP_EOL;
        }




    }
}