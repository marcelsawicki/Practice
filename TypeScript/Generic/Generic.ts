function identity<T>(value: T) {
	return value;
}

var text = identity("hej"); // -> string
var one = identity(1); // -> number

class Pait<T1, T2> {
	constructor(readonly item1: T1, readonly item2: T2){
		
	}
	
	toTuple(): [T1, T2] {
		return [this.item1, this.item2];
	}
}

var pair1 = new Pair<number, string>(1, "one");
var pair2 = new Pair(2, "two");