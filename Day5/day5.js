var fs = require("fs")
var myArgs = process.argv.slice(2);

for (let i = 0; i < myArgs.length ; i++) {
    if (myArgs[i].slice(0,16) == "fs.writeFileSync")
    {
        console.log("hritik")
        fs.writeFileSync("programming.txt","created")
    }
    else if (myArgs[i].slice(0, 15) == "fs.readFileSync")
    {
        console.log("reading")
        console.log(fs.readFileSync("programming.txt", "utf8"))
    }
    else if (myArgs[i].slice(0, 17) =="fs.appendFileSync")
    {
        fs.appendFileSync("programming.txt", "Updated")
    }
    else
    {
        fs.unlinkSync("programming.txt")
    }
}