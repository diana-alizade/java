let username = prompt("enter your name:");
let reversed="";
for (let i = username.length-1; i >= 0; i--) {
    reversed +=username[i];
}
console.log(reversed);