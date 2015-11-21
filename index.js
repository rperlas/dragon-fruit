// A library of functions to handle an array of Strings.

exports.massReplace = function (stringArray, toReplace, replaceWith) {
	for (var x = 0; x < stringArray.length; x++) {
		stringArray[x] = stringArray[x].replace(toReplace, replaceWith);
	}
	return stringArray;
}

exports.massReplaceNew = function (stringArray, toReplace, replaceWith) {
	var newArray = [];
	for (var x = 0; x < stringArray.length; x++) {
		newArray[x] = stringArray[x].replace(toReplace, replaceWith);
	}
	return newArray;
}

exports.connectAll = function (stringArray) {
	var newString = "";
	for (var x = 0; x < stringArray.length; x++) {
		newString += stringArray[x];
	}
	return newString;
}

exports.connectAllSpaced = function (stringArray, inBetween) {
	var newString = "";
	if (typeof inBetween === "undefined") inBetween = " ";  
	for (var x = 0; x < stringArray.length; x++) {
		newString += inBetween + stringArray[x];
	}
	return newString;
}