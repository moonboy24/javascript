// JSON = ( JS Object Notation ) data- interchange format 
// Used for exchanging data bw a server and a web application
// JSON file (key:value) or (value1, value2 , value3)

// JSON.stringify() = Converts a JS object to a JSON string
// JSON.parse() = converts a JS string into a JS Object

const jsonNames = `["sponge" ,"melons" , "mia"]`;
const jsonPersons = `{
    "name" : "sidney",
    "age" : 25,
    "isEmployed" : true ,
    "hobbies" : ["jelly fishing" , "gaming"]}`;
const jsonPeople = `[{"name" : "sidney","age" : 25,"isEmployed" : true},
                {"name" : "sweeny","age" : 26,"isEmployed": false},
                {"name" : "kaveh","age" : 24,"isEmployed" : true},
                {"name": "neuvi","age": 50,"isEmployed": true}]`;



// const jsonStrings = JSON.stringify(jsonPeople);
// console.log(jsonStrings);

// const parsedData = JSON.parse(jsonPersons);
// console.log(parsedData);

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => {console.log(value.name)}))
    // .then(value => console.log(value))
    .catch(error => console.log(error));