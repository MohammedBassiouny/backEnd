  const fs = require("fs");
const yargs = require("yargs");
const app = require("./app");

  

//////////////////////////////////////////////////////////////////////////////

yargs.command({
    command : "add",
    describe : "To add an item",
    builder:{
        id:{
            describe: "to add id",
            demandOption:true,
            type : "number"
        },
        fname : {
            describe: "to add frist name",
            demandOption : true,
            type : "string"
        },
        lname : {
            describe: "to add last name",
            demandOption : true,
            type : "string"
        },
        age:{
            describe: "to add age",
            type : "number"
        },
        city:{
            describe: "to add city",
            type : "string"
        },
    },
    handler:(x)=>{
        app.addPerson(x.id,x.fname,x.lname,x.age,x.city);
    }
})

yargs.command ({
    command : "delete",
    describe :"to deleted an item",
    builder : {
        id : {
            describe : "id to item",
            demandOption : true ,
            type : "number"
        }
    },
    handler : (x)=>{
        app.deletePerson(x.id);
    }
})

yargs.command ({
    command : "list",
    describe :"to listed all items",
    handler : (x)=>{
        app.listData(x);
    }
})

yargs.command({
    command: "find",
    describe : "To find an items by Id",
    builder : {
        id : {
            describe : "id to item",
            demandOption : true ,
            type : "number"
        }
    },
    handler : (x) => {
        app.findPerson(x.id)
    }
})

yargs.parse();

// yargs.command({
//     command : "dalate",

// })