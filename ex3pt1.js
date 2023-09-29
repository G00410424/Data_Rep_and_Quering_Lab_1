//Exercise 3 part a and b
//This arrow function adds strings to the array and output in the console. 

var myArray = [];
var addTask = (task)=>{

    myArray.push(task);
    console.log("Item " + task + " added to the array");
    console.log("Array size is: " + myArray.length);

    }
addTask('Hydrogen');

var addTask = (task)=>{
    
    myArray.push(task);
    console.log("Item " + task + " added to the array");
    console.log("Array size is: " + myArray.length);

    }
addTask('Helium');

var addTask = (task)=>{
    
    myArray.push(task);
    console.log("Item " + task + " added to the array");
    console.log("Array size is: " + myArray.length);

    }
addTask('Lithium');

//Exercise 3 part a and c
//This arrow function loops trhough the array and output each item in the console. 

var listAllTasks = ()=>{
    
    for(var i = 0; i <= myArray.length; i++){

        console.log("Items in array are as follow: " + myArray[i]);

         }

    }
listAllTasks();

//let listAllTasks =() => {
    //myTasks.forEach((item)=>{
        //console.log(item);
    //})
    //}
//}

//Exercise 3 part a and d
//This arrow function deletes strings to the array and output in the console. 

var deleteTask = (task)=>{
    
        let index = myArray.indexOf(task);
        if(index > -1)
        {
            myArray.splice(index, 1);
            console.log("Item " + task + " has been removed from the array");
            console.log("Array size is: " + myArray.length);
        } 
        
        else {
            console.log("Item " + task + "was not found in array");

        }
    
    }
deleteTask('Helium');

// Test with an item that is not in the array. 
var deleteTask = (task)=>{
    
    let index = myArray.indexOf(task);
    if(index > -1)
    {
        myArray.splice(index, 1);
        console.log("Item " + task + " has been removed from the array");
        console.log("Array size is: " + myArray.length);
    } 
    
    else {
        console.log("Item " + task + " was not found in array");

    }

}
deleteTask('HEEEEEEEEEELLO');