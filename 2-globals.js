// GLOBALS - NO WINDOW IN NODE

// __dirname  -  path to current directory
// __filename -  filename including full path
// require    -  function to use modules
// module     -  info about current module
// process    -  info about env where program is being executes

console.log("Dir Name: "+ __dirname)
console.log("File Name: "+__filename + "\n")

const greet = setInterval(()=> {
   console.log("hi deva")
},750)

setTimeout(()=> {
  clearInterval(greet);
},3500)
