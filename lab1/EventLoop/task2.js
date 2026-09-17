import { log } from 'console';
import fs from 'fs/promises'; //fs:performing operations related to file

const writeData = async () => {   //only async function can use await
    try {
        console.log('about to write...');
        await fs.writeFile('stud.txt',"Name:Areeba Alam");
        console.log("File written");
    } catch (error) {
        console.log(error);
    }
};

const f1 = () => {
    console.log("f1");
};

const f2 = () => {
    console.log("f2");
};

const f3 = () => {
    console.log("f3");
};

const main = () => {
    console.log("main");
    setTimeout(f1,0);
    // setInterval(f2,1000); //to stop it use ctrl+C
    setImmediate(f2);
    process.nextTick(f3);
    writeData();
    console.log("end");
};
main();