

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE
    for(var i = 0; i < array.length; i++){
      callback(array[i]);
    }
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var total = 0;
    args.forEach(function(element, index, array){
      total += element;
    });
    return total;
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var largest;
    args.forEach(function(element, index, array){
    if(index === 0){
      largest = element;
    }
    else if (element > largest){
      largest = element;
    }

});
    return largest;
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE

    var maxLength;
    var longest;
    args.forEach(function(element, index, array){
    if(index === 0){
      maxLength = element.length;
      longest = element;
    }
    else if (element.length > maxLength){
      maxLength = element.length;
      longest = element;
    }

});
    return longest;
}


 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */


// special shout out to the MDN for explaining arrays so well https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// .sort()
  var myArr = ["dog", "cat", "bat", "cow"];
  myArr.sort();

console.assert( myArr[0] === "bat");
// .concat()
  var movies = ["The Empire Strikes Back", "Jurassic World", "The Avengers"];
  var nflTeams = ["Saints", "Texans", "Panthers"];

  var mishMash = movies.concat(nflTeams);

  console.assert( mishMash.length === 6);

// .indexOf()
var rando = [0, 7, 8, 4, 16];
var indexed = rando.indexOf(8);


console.assert(indexed === 2);
// .split()

  var myStr = "I've been working on the railroad. All the live long day";
  var splitArr = myStr.split(" ");

  console.assert (splitArr.length === 11);

// .join()
  var newArr = ["Well", "that", "escalated", "quickly"];
  var newStr = newArr.join(" ");

  console.assert (newStr === "Well that escalated quickly");

// .pop()
  var nextArr = [1, 2, 5, 7];
  nextArr.pop();

  console.assert (nextArr.length === 3);
// .push()
  var cereal = ["Captain Crunch", "Cocoa Puffs", "Honey Bunches of Oats"];

  cereal.push("Apple Jacks", "Cheerios");

  console.assert (cereal[4] === "Cheerios");
// .slice()
  var nums = [2, 7, 4, 8, 6, 15];
  var subset = nums.slice(1, 3);

  console.assert(subset[1] === 4);
// .splice()
var splicing = [2, 7, 8, 12, 35];

splicing.splice(3, 2, 6, 7);

console.assert(splicing[3] === 6);

// .shift()
var shifting = [2, 11, 12, 17, 34];
shifting.shift();

console.assert(shifting[0] === 11);
// .unshift()
var unshifting = [0, 12, 8];
unshifting.unshift(6);

console.assert(unshifting[1]===0);
// .filter()

// .map()
