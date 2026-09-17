import readLine from "readline/promises";
import {stdin, stdout} from "process";
import { readFile, writeFile} from "fs/promises";

// Database using file starts
const FILE= "cart.json";

const getCart = async () => {
    const data = await readFile(FILE,"utf-8"); // we use utf-8 so we can go above ASCII code
    return JSON.parse(data);
};

const saveCart = async (cart) => {
    await writeFile(FILE, JSON.stringify(cart,null,2));
};

const addToCart = async (product) => {
    const cart = await getCart();
    const isFoundInCart = cart.find((item) => item.id === product.id);
    if(isFoundInCart){
        isFoundInCart.qty+=1;
    }else cart.push(product);
    await saveCart(cart);
    console.log(`${product.name} added/updated to 🛒`);
};

const displayCart = async () => {
    const cart = await getCart();
    if(cart.length == 0) {
        console.log("🛒 is empty");
        return;
    }
    console.table(cart);   // to print the arrau with index we use console.table()
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    console.log(`Total Payable Amount Rs. ${total}`);
};

const removeProduct = async (pid)=>{
    const cart = await getCart();
    // const isFoundInCart = cart.find((item) => item.id === pid);
    let x=cart.length;
    const newproducts = cart.filter((item)=>item.id !== pid);
    let y=newproducts.length;
    if(y<x)
    {
        console.log(`Product with id ${pid} is removed from cart`);
        await saveCart(newproducts);
    } else {
        console.log(`Product with id ${pid} not found`);
    }
};

const updateQuantity = async (prid, option="-") => {
    const cart = await getCart();
    const isFoundInCart = cart.find((item) => item.id === prid);
    if(isFoundInCart){
        if(isFoundInCart.qty==1) {
            await removeProduct(prid);
        } else {
        isFoundInCart.qty-=1;
        await saveCart(cart);
        }
        console.log(`${isFoundInCart.name} quantity updated from 🛒`);
    } else {
        console.log(`Product with id ${pid} not found`);
    }
};

const main =  async () => {
    let choice;
    const cin = readLine.createInterface({input: stdin, output: stdout});

    do {
    console.log("Welcome to Amazon Shopping 🛒");
    console.log("1......Show Cart");
    console.log("2......Add Product");
    console.log("3......Remove Product");
    console.log("4......Update Quantity");
    console.log("5......Checkout");
    choice = await cin.question("Enter your choice: ");

    switch(Number(choice)){
        case 1:
            await displayCart();
            break;
        case 2:
            const item = await cin.question("Enter id,name,price,qty:");
            const [id, name, price, qty] = item.split(',').map((p) => p.trim()); //we use split function to break the string and trim function to remove spaces from the start and end of the string.
            // we use map for iteration
            await addToCart({
                id: Number(id),
                name,
                price: Number(price),
                qty: Number(qty),
            });
            break;

        case 3:
            let pid = await cin.question("Enter product id:");
            await removeProduct((Number(pid)));
            break;
        case 4:
            let prid = await cin.question("Enter product id and option(+/-)");
            await updateQuantity((Number(prid)));
            break;
        case 5:
            console.log("Checkout");
            break;
        default:
            console.log("Invalid Choice. Please try again.");
    }
    } while(choice!=5);
    cin.close();
};

main();

