// 14. Guest List: 
// If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at 
//least three people you’d like to invite to dinner. Then use your list to print a message to 
//each person, inviting them to dinner.
let invite : string[]= ["Ali ", "Irfan", "Hammad"]
//For loop 
//For each 
//for of loop
for (let i = 0; i < invite.length; i++) {
    console.log(`Hello Dear : ${invite[i]} ,You are invited for dinner !`);
}
//For each 
invite.forEach(frind  => {
    console.log(`Hello Dear : ${frind} ,You are invited for dinner !`);
});
//for of loop 
for (let guest  of invite) {
    console.log(`Hello Dear : ${guest} ,You are invited for dinner !`);
}