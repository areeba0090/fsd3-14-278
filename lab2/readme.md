<!-- CRUD FULL FORM
C: Create
R: Retrieve
U: Update
D: Delete -->
<!-- In Node.js, the built-in fs module lets your program work with files and folders: create, read, update, delete, rename, and copy them. -->
<!-- fs module do not communicate with browser but directly with the operating system . -->
<!-- The browser is not able to create the folder hence fs module helps with it. -->
<!-- It reads the textual data as well as process the pixel data, it uses binary  -->

# File System of NodeJs
It allows JS code running outside the browser and interact directly to operating system .
## commmon operations on file/folder
- Reading and writing files -> readFile(), writeFile(), appendFile()
- Directory management -> mkdir(), rmdir(), readdir()
- Metadata/information -> stat(), lstat(), fstat()
- Watching for changes -> watch(), watchFile(), unwatchFile()
- Streaming Large Files -> createReadStream(), createWriteStream()
- File Operations -> rename(), truncate(), unlink(), link(), syslink()
##  await can be used with any promise in async function . That async function will also accessed by await keyword. To call the async function we have to use await .