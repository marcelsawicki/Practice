function filterItems<T>(items: T[], predicate: (item: T)=> boolean){
var result: T[] = [];
	for(var item of items) {
		if(predicate(item)){
			result.push(item);
		}
	}	
	return result;
}

var result1 = filterItems([1, 2, 3, 4, 5], function(item){
	return item % 2 === 0;
});

var result2 = filterItems([1, 2, 3, 4, 5], item => item %2 === 0);

// Delegaty?

type Func0<TResult> = () => TResult;
type Func1<T1, TResult> = (arg1: T1) => TResult;
type Func2<T1, T2, TResult> = (arg:T1, arg2: T2) => TResult;
//...
type Action0 = () => void;
type Action1<T1> = (arg1: T1) => void;