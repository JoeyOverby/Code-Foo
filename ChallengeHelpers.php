<?php declare(strict_types=1);
/**
 * Created by Joey Overby
 * Repositories: https://github.com/JoeyOverby
 * Date: 2018-12-07
 * Time: 13:14
 */

if (!defined('__CODE_CHALLENGES_HOME__')) {
    define('__CODE_CHALLENGES_HOME__', dirname(__DIR__));
}

/**
 * Class ChallengeHelpers
 *
 * A set of helper functions for the code challenges
 */
class ChallengeHelpers {

    /**
     * @param string $filename          - The filename of the file where we will return each line of that file as its own element in an array
     * @param string|null $delimiter    - (Optional) If this isn't null, after reading a line in, then create another array of each element where this is the delimiter
     * @return string[]
     *
     * Parses an input file and returns a string array of all of the lines that are not empty
     */
    public static function readFileIntoArray(string $filename, string $delimiter = null) : array{
        $handle = fopen($filename,"r");

        $toReturn = [];

        while( ($line = fgets($handle)) !== false) {
            $toAdd = trim($line);
            if(strlen($toAdd) > 0){ //If the string length is greater than zero
                $toReturn[] = trim($line);
            }

        }

        if($delimiter !== null){
            $toReturn = self::readLinesIntoArray($toReturn, $delimiter);
        }
        
        return $toReturn;
    }


    /**
     * @param array $lines - An Array of input lines
     * @param string $delimiter - The delimiter separating the different array elements
     * @return array
     */
    public static function readLinesIntoArray(array $lines, string $delimiter) : array{
        $arrays = [];
        foreach($lines as $line){
            $arrays[] = explode( $delimiter, $line);
        }

        return $arrays;
    }



}