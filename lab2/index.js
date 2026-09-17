import { writeFile, readFile, appendFile } from "fs/promises";

// await writeFile("stud.txt", "Areeba Alam\nRollNo:2503201000278\nAdmissionNo:2025B01010090");
// console.log("File written");
// const data = await readFile("stud.txt", "utf-8");
// console.log(`file contents: ${data}`);

const addContent = async (fname, content) => {
   await writeFile(fname, content);
   console.log(`${content} written in ${fname}`);
};

const readContent = async (fname) => {
    const data = await readFile(fname,"utf-8");
    return data;
};

const appendData = async (fname,content) => {
   await appendFile(fname, "\n" + content);
   console.log("data appended");
};

await addContent("notes.txt", "FS is easy in JS");
console.log("Contents\n", await readContent("notes.txt"));
await appendData("notes.txt", "it can add, read and update content");
console.log("Updated Content\n", await readContent("notes.txt"));

// The function we use await in , async should be used .
// if there are curly brackets and in that there is key value pairs in it then we will use or create json file.