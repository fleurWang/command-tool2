/** 
 * option
 * version
 * command
*/


const program = require('commander');
const pkg = require('./package.json');

function myParseInt(value, dummyPrevious) {
  // parseInt takes a string and an optional radix
  return parseInt(value);
}

program.version(pkg.version); // -V --version
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-c, --cheese <type>', 'add the specified type of cheese', 'blue') // default val
  .option('-i, --integer <number>', 'integer argument', myParseInt) // 可以有回调函数
  .option('-p, --pizza-type <type>', 'flavour of pizza');
 
program.parse(process.argv);
 
// 会顺序执行 if 里面的如果匹配上就会执行
// 任何一个 error 会导致其上面的命令也无法执行
if (program.debug) console.log(program.opts());
console.log('pizza details:');
if (program.small) console.log('- small pizza size');
if (program.pizzaType) console.log(`- ${program.pizzaType}`);

console.log(`cheese: ${program.cheese}`);

if (program.integer !== undefined) console.log(`integer: ${program.integer}`);

