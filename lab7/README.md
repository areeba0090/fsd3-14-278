# Frontend - Backend

1. Create project folder (lab7).
2. Create frontend, backend folder.
3. Open lab7 integrated terminal and split into two.
4. Open frontend into left side terminal.
5. Open backend into right side terminal.
6. In backend:-
    a. Initialize backend bu `npm init -y`.
    b. Install nodemon by `npm i nodemon`.
    c. Open package.json from backend, update `type to module` and script
    d. create app.js
7. In frontend:-
    a. `npm create vite@latest`
    b. Enter `.` as project name
    c. Select framework as `React` from arrow key.
    d. Select variant as `JavaScript` from arrow key.
    e. Select `ESLint` for linting  from arrow key.
    f. Select install and start the frontend.

## Components
1. Simple JS functions return HTML directly.
2. It must starts with capital letter.
3. It should be treated as HTML tag.
4. It must be closed.

## Object Destructure
1. const{bname,price,quantity,rating,picUrl}=props.book;
a. It doesn't depends on order, if property is not available then it initialize with null.
2. const{price,picUrl}=props.book;   (to get the selected property)
3. const{price,...rest}=props.book;  (to leave the selected property and get the rest of it)
return rest;
b. Any components include styles
i. External CSS: Create class in index.css and use in component.
ii. Internal CSS: Create property as object 
'''
const qtystyle = {
    fontSize:"irem",
    color:"blue",
    texAlign:"center",
    backgroundColor:"Yellow",
    padding:"10px",
  }
'''
then apply with style at preview and pass the object
' <h3 style={qtystyle}>Quantity: {quantity}</h3> '
iii. Inlice CSS: In this method we use two curly bracket with style attribute. All the CSS property must be single word. For Example: text-align becomes textAlign (Camel Case)

rafce->Arrow Function
rfce->function
