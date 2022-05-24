// const { add } = require("lodash")

// console.log('nummero uno')

// setTimeout(()=>{
//     console.log('das müüsste 2 sein')
//     console.log('das müsste 3 sein')
// },5000)

// console.log('4')


user = ['anne', 'peter', 'klaus']

function adduser (username, callback){
    user.push(username);
    callback();
    console.log('test')
}
console.log('test2')
function usercall(){
    console.log(user);
}

adduser('arne', usercall)