// let promise = new Promise((resolve, reject) => {{}
//     let success = true; 
//         if (success) {
//             resolve("Data Loaded!");
//         } else {
//             reject("Error Occured");
//         });
//     promise.then(result => {
//         console.log(result);
//     }).catch(error => {
//         console.error(error);
//     });


// try{
//     var x=y+10;
// }
// catch(error){
//     console.error("An error occurred: " + error.message);
// }


localStorage.setItem("name", "hrittik");
var name1=localStorage.getItem("name");
console.log(name1);

// store object
var user = {name: "hrittik", age: 25};
localStorage.setItem("user", JSON.stringify(user)); // json to string
// retrieve object
var user1 = JSON.parse(localStorage.getItem("user"));
console.log(user1.name,user1.age);
