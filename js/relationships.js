function getRelationship(x, y) {
	//Declare a variable to be returned later 
	var statement; 
	//Compare x to y
	if (isNaN(x) && isNaN(y)) {
		statement = "Can't compare relationships because " + x + " and " + y + " are not numbers.";
	}
	else if (isNaN(x)) {
		statement = "Can't compare relationships because " + x + " is not a number.";
	}
	else if (isNaN(y)) {
		statement = "Can't compare relationships because " + y + " is not a number." ;
	}
	else if (x < y) {
		statement = "<";
	}
	else if (x > y) {
		statement = ">";
	}
	else if (x === y){
		statement = "=";
	}
	  return statement;
};

console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));
