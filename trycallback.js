


// user = ['anne', 'peter', 'klaus']

// function adduser (username, callback){
//     user.push(username);
//     callback();
//     console.log('test')
// }
// console.log('test2')
// function usercall(){
//     console.log(user);
// }

// adduser('arne', usercall)

console.log('1');

setTimeout(()=>{
    setTimeout(()=>{
        console.log('2')
    },8000)
    setTimeout(()=>{
        console.log('3')
    },6000)
},)

console.log('4')