//5.Գրել ծրագիր որ կկարդա Homework5 պապկայի ֆայլերը,  կստեղծի newDir պապկա և այնտեղ կտեղափոխի այն ֆայլերը
// իրենց պարունակություններով որոնք 1kB մեծ են :
const fs = require('fs').promises;
const fsExtra = require('fs-extra');
//console.log(fs.readdir('web'));

async function move() {
    const files = await fs.readdir('web');
    for(let filePath of files) {
        const stat = fs.stat('./web/' + filePath);
        if((await stat).isFile() && (await stat).size > 1) {
            //console.log((await stat).size);
            fsExtra.move('./web/'+ filePath , './newDir/' + filePath);
        }
    }
}

move().then().catch(err => console.error(err));

