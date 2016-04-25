function getRelationship(x, y) {

    //Compare x to y
    if (isNaN(x) && isNaN(y)) {
        return "Can't compare relationships because " + x + " and " + y + " are not numbers.";
    }
    else if (isNaN(x)) {
        return "Can't compare relationships because " + x + " is not a number.";
    }
    else if (isNaN(y)) {
        return "Can't compare relationships because " + y + " is not a number." ;
    }
    if (x === y){
        return "=";
    }
      return x > y ? '>' : '<';
};

console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));
