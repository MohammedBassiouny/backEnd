const fs = require("fs");



// ///////////////////////////////////////////////////////////////////////////

const addPerson = (id,fname,lname,age,city)=>{
    const allData = loadInfo();
    const duplicatedData = allData.filter((obj) =>{
        return  obj.id === id 
     })
    if (duplicatedData.length == 0 ){
        allData.push({
            id : id,
            fname : fname,
            lname : lname,
            age : age,
            city : city,
            
        });
        saveData(allData);
    } else {
        console.log("this id already found")
    }
    
}

// ////////////////////////////////////////////////////////////

const loadInfo = ()=>{
    try {
        const dataJson = fs.readFileSync("appData.json").toString();
        return JSON.parse(dataJson)
    } catch {
        return []
    }
}

// ////////////////////////////////////////////////////////

const saveData = (allData) => {
    const saveAllData = JSON.stringify(allData)
    fs.writeFileSync("appData.json",saveAllData)
}

// ////////////////////////////////////////////////////////////
const deletePerson = (id) =>{
    const allData = loadInfo();
    const unDeleData = allData.filter((obj)=>{
        return obj.id !== id
    })
    saveData(unDeleData);
 }

// /////////////////////////////////////////////////////////////
const findPerson = (id)=>{
    const allData = loadInfo();
    const findData = allData.find((obj) =>{
        return obj.id === id
    })
    if (findData){
        console.log(findData)
    } else{
        console.log ( "This person not found")
    }
}
// /////////////////////////////////////////////////////////////
const listData = () => {
    const  allData = loadInfo();
        allData.forEach((obj) => {
        console.log(obj.fname ,obj.lname, obj.city || "unkown" ,obj.age || "unkown")
    })
}
////////////////////////////////////////////////////////////////////
module.exports = {
    addPerson,
    deletePerson,
    findPerson,
    listData
}