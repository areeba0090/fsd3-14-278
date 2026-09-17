const f1 = () => {
    console.log("f1 starts");
    f2();
    console.log("f1 running");
    console.log("f1 end");
};
const f2 = () => {
    console.log("f2 starts");
    f3();
    console.log("f2 running");
    console.log("f2 end");
};
const f3 = () => {
    console.log("f3 starts");
    console.log("f3 running");
    console.log("f3 stops");
};
function main()
{
    console.log("main starts");
    f1();
    console.log("main running");
    console.log("main ends");
}
main(); //synchronous call 
//javascript is synchronous and single threaded(limitation:can do only one thing at a time)
//to help with this limitation we use asynchronous we use eventloop to manage the call stack
// asynchronous call using timers : 1. SetTimeout 2. SetImmediate 3. Process.nextTick 4. SetInterval