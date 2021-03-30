/*
1. Գրել ծրագիր որը կստեղծի ֆայլ Ձեր համակարգչի user անունով և այդ ֆայլում գրել համակարգչի userinfo-ն:
 */
const os = require('os');
const fs = require('fs');




const userInfo = os.userInfo();
const username =  userInfo.username;
console.log(username);
fs.writeFile(username +'.txt', JSON.stringify(userInfo), (err)=>{
    if( err) {
        console.error(err.message);
        return;
    }
    console.log('done');

});
