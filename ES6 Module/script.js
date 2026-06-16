// ES6 Module - An external file that contains reusable code that can be imported into another JS Files
//              Write reusable code for many different apps
//              Can contain variables , classes , functions ...  and more

import {PI , getCircumference , getArea , getVolume} from './mathUtil.js';

console.log(PI);

const circumference = getCircumference(15);
const area = getArea(10);
const volume = getVolume(10);

console.log(circumference);
console.log(area);
console.log(volume);