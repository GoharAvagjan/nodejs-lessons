//2. Գրել ծրագիր որ նախորդ առաջադրանքի կողմից ստեղծված ֆայլ կանվանափոխի այդ պահի ամիս,
// օր, ժամ, րոպեով, վայրկյանով (Օրինակ 10_11_15_32_13.txt):

const os = require('os');
const fs = require('fs');


const userInfo = os.userInfo();
const username =  userInfo.username;
const nowDate = new Date();

fs.rename(username + '.txt', nowDate.getMonth()+'_' + nowDate.getHours() +'_'+ nowDate.getMinutes() +'_'+ nowDate.getSeconds(), (err)=>{
    if(err) {
        console.error(err.message);
    }
    console.log('done');

});