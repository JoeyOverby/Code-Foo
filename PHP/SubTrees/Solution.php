<?php declare(strict_types = 1);
/**
 * Created by Joey Overby
 * Date: 2019-03-20
 * Time: 13:12
 */

include_once("../Queue.php");
include_once("../ChallengeHelpers.php");
include_once("../TreeNode.php");


/**
 * Class Solution
 */
class Solution {
    
    
    /**
     * Checks if the tree, s, contains a subtree that exactly matches $t
     *
     * @param TreeNode $s
     * @param TreeNode $t
     *
     * @return Boolean
     */
    function isSubtree($s, $t) : bool {
        
        if($s->val === $t->val) {
            //We found a match, so see if the subtree is fully equal
            if($this->checkSubtree($s, $t) === true){
                return true;
            }
        }
        
        
        if($s->hasLeft()) {
            if( $this->isSubtree($s->left, $t) === true){
                return true;
            }
        }
        
        if($s->hasRight()) {
            if($this->isSubtree($s->right, $t) === true) {
                return true;
            }
    
        }
    
            return false;
        
        
        
    }
    
    /**
     * This function checks that starting at two equal nodes, are the rest of the subtree nodes equal?
     *
     * @param TreeNode $s
     * @param TreeNode $t
     *
     * @return bool
     */
    function checkSubtree(TreeNode $s = null, TreeNode $t = null) : bool {
        
        $sVal = ($s !== null) ? $s->getVal() : null;
        $tVal = ($t !== null) ? $t->getVal() : null;
        
        if($sVal !== $tVal) {
            return false;
        }
        
        if($sVal === null && $tVal === null) {
            return true;
        }
        
        $leftAnswer  = $this->checkSubtree($s->getLeft(), $t->getLeft());
        $rightAnswer = $this->checkSubtree($s->getRight(), $t->getRight());
        
        if($leftAnswer && $rightAnswer) {
            return true;
        } else {
            return false;
        }
        
    }
    
}

