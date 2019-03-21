<?php declare(strict_types = 1);
/**
 * Created by Joey Overby
 * Date: 2019-03-21
 * Time: 14:51
 */

include_once ("../ChallengeHelpers.php");
include_once ("../TreeNode.php");
include_once ("Solution.php");

/**
 * Class ProgramRunner
 *
 * Simple class to just run the TreeNode/Solution class
 */

class ProgramRunner {
    
    public static function run() : void {
        //Load in the input data
        $array = ChallengeHelpers::readFileIntoArray('Input3.txt', ",", ["[",
                                                                        "]"]);
        
        $sArray = $array[0];
        $tArray = $array[1];
        
        $s = TreeNode::buildTree($sArray);
        $t = TreeNode::buildTree($tArray);
        
        $solution = new Solution();
        if($solution->isSubtree($s, $t)) {
            echo "TRUE" . PHP_EOL;
        } else {
            echo "FALSE" . PHP_EOL;
        }
        
    }
}

ProgramRunner::run();