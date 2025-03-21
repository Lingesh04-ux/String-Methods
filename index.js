// String Methods - .charAt(index) , .indexOf() , .lastIndexOf() , length , .trim() , .toUpperCase(),
// .LowerCase(), repeat() , .startsWith() , endsWith() , .includes(), .replaceAll(),
// .padStart() , .padEnd(), .split()

// .charAt(index) - accessing the string character by entring the index number
let a = "Lingesh"
console.log(a.charAt(5)); // s 

// .indexOf("char") - accessing the index number by entring the character
let b = "Lingesh"
console.log(b.indexOf("s")) // 5 

// .lastIndexOf("lastSameChar") - accessing the last index number by entring the last repeating character 
let c = "LingeshHari"
console.log(c.lastIndexOf("i")) // 10

// .length - to get the length of the string in numbers (NOT STARTS IN WITH "0")
let d = "Lingesh"
console.log(d.length) // 7 

// .trim() - to remove the white space from starting and ending inside the String and gives the merged value
let e = ' "Lingesh" '
console.log(e.trim()) // "Lingesh"

// .toUpperCase() - to converts all charaters to captial letter 
let f = "lingesh"
console.log(f.toUpperCase()); // LINGESH

// .toLowerCase() - to converts all charaters to small letter
let g = "LINGESH"
console.log(g.toLowerCase()) //lingesh

// .repeat(no.of.times) - to repeat the String in no.of.times
let h = "Lingesh"
console.log(h.repeat(3)); //LingeshLingeshLingesh

// .startsWith("check the value") - check the character starts with particular character, gives true/false
let i = "Lingesh"
console.log(i.startsWith("k")) //false

// .endsWith("check the value") - check the character ends with particular character ,gives true/false
let j = "Lingesh";
console.log(j.endsWith("h")); //true

// .includes("check the value") - check the value contains inside String
let k = "Lingesh Hari"
console.log(k.includes(" ")); //true - space present in my word

// .replaceAll("selected char", "desired char") - replaces the 1st char into 2nd char 
let l = "Lin-gesh-ha-ri"
console.log(l.replaceAll("-","/")); // Lin/gesh/ha/ri

// .padStart(how many desired char in numbers + total no.of char, "desired number") - it makes the charcter count long in the starting
let m = "12345" 
console.log(m.padStart(10,"0")); // 0000012345

// .padEnd(how many desired char in numbers + total no.of char, "desired number") - it makes the charcter count long in the ending
let n = "12345"
console.log(n.padEnd(10, "0")); //1234500000

// .split() - is a method where the present element was changed into split 
let o = "Lingesh Hari"
let p = 0.split(" ")
console.log(p) // ["Lingesh","Hari"] // spliting into 2 objects based on the space 



