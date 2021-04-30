/*Question: Convert an array of integers into an array of strings
 *          representing the phonetic equivalent of the integer.
 */

function toWords(num){
    var str = "";
    for (var i = 0; i < num.length; i++){
        str += nums[parseInt(num[i])]
    }
    return str
}

/*Main*/
var arr = process.argv.slice(2)
var nums = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
var wnums = [];
arr.forEach(num => wnums.push(toWords(num)));
console.log(wnums.toString());