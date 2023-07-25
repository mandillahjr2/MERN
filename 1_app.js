//GLOBALS -NO WINDOW ! Because there's no browser

//__dirname -path to current directory
//__filename 
//require -function to use(import) modules
//module  -info about current module
//process -info about where program execution is happening


//MODULES in node
//Module - Encpsulated Code (only share minimum)

// const sayHi = (name) => {
//   console.log(`Hello ${name}`);
// }

const majina = require('./3_names')
// console.log(names);
const semaHi = require('./4_utils')
semaHi(majina.john)
semaHi(majina.peter)
semaHi('FaithR')

const altImportWayData = require('./5_altImport')
console.log(altImportWayData);