<?php declare(strict_types = 1);
/**
 * Created by Joey Overby
 * Date: 2019-03-21
 * Time: 17:02
 */


/**
 * Class BitwiseComplement
 * For the Leet Code Challenge: https://leetcode.com/problems/complement-of-base-10-integer/
 *
 */
class BitwiseComplement {
    
    /**
     * @param int $number
     *
     * @return int
     */
    public static function compute( int $number) :int {
        $binary = decbin($number);
        
        $val = "";
        for($i=0; $i<strlen($binary) ; $i++){
            if($binary[$i] === "0"){
                $val .= "1";
            }else{
                $val .= "0";
            }
        }
        
        $dec = bindec($val);
        return $dec;
    }
    
}