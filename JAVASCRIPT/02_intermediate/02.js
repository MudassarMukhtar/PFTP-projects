// ARRAY METHODS
const userList=[1,2,3];
//lenght propert
let length=userList.length
// console.log(length)
//push()
userList.push("ali");
userList.push("mudassar");
// console.log(userList);

//pop()
// console.log(userList.pop())

//indexof()
// let index=userList.indexOf('ali');
let index=userList.indexOf('mudassar',)
// console.log(index);//3&4

//includes()
let include=userList.includes('mudassar',)
// console.log(include);//true/false

// ARRAY LOOPS
// for
// for-in
// for-of
// map

for(i=0;i<=userList.length;i++){
    //console.log(userList[i]);
}

userList.forEach((val)=>{
    //console.log(val)
})

for(let arr_val in userList){
    //console.log(userList[arr_val]);
}

for(let arr of userList){
    //console.log(arr);
}
userList.map((valuse)=>{
    console.log(valuse);
})
userList.filter((i)=>{
    console.log(i)
})