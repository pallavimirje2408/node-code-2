const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('Pallavi'));

var filteredarray = _.uniq([1,3,4,2,4,4,4, 'Pallavi','And']);
console.log(filteredarray);

var array = [1,2];
var newarr = _.concat(array,2,[3],[[4]] );
console.log(newarr);
console.log(array);
var fil = _.uniq(newarr);
console.log(fil)


var numbers = _.countBy([5.4, 5.9, 2, 1, 1.3], Math.floor);
console.log(numbers);
var len = _.countBy(['one', 'two', 'seventeen','four'], 'length');
console.log(len);

var name = 'Pallavi'
var siz = _.size(name);
console.log(siz);