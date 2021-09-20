// 2.	Write a function which filter users who has  scoresGreaterThan85,  
// Write a function which addUser  to the user array only if the user does not exist.   
// Write a function which addUserSkill which can add skill to a user only if the user exist.   
// Write a function which editUser if the user exist in the users array.  
// ```js


const users = [
{
    name:'Brook', 
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
},
{
    name:'Alex', 
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
}, 
{
    name:'David', 
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
}, 
{
    name:'John', 
    scores:85,
    skills:['HTML'],
    age:25
},
{
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
},
{
    name:'Martha', 
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
},
{
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
}
];
//solution
function filterByscore(arr, score){

   var abc = arr.filter(elm => elm.scores >  score)
   return abc;
}
//console.log(filterByscore(users, 70))

//add user to array if user is not present

function addAnUser(arr, object){
    var existUser = arr.find(elm => elm.name.toLowerCase() == object.name.toLowerCase())
    if(existUser){
        return "User is alredy present"
    } else 
    arr.push(object);
    return arr;

}

let newObject = {
    name:'thomas',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:20

};

let newObject1 = {
    name:'Sandy',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:20

}


console.log(addAnUser(users, newObject))

//solution add skil to the array of user
function addSkill(arr, user, skill){
    var userIndex = arr.findIndex(elm => elm.name.toLowerCase() == user.toLowerCase());

    if(userIndex == -1){
        return "user does not exists"
    } else {
        var skills =  arr[userIndex].skills
        skills.push(skill)
    }
    return arr[userIndex];
};

// console.log(addSkill(users, "John", "Javascript"))

//update the user details
function update(arr, user, updateScore){
    var userIndex = arr.findIndex(elm => elm.name.toLowerCase() == user.toLowerCase())
    if(userIndex == -1){
        return "user does not exists"
    } else {

     arr[userIndex].scores = updateScore

     return arr[userIndex]
    }
}

console.log(update(users, "john", 87))