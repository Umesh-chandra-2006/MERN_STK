//1st Assignment

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Products in stock 
let stock = cart.filter( item => item.inStock);
console.log("Products in stock: ", stock);

//Name and Price of each item
let nameAndPrice = cart.map( item => ({ name: item.name, price: item.price*item.quantity }) );
console.log("Name and Price: ", nameAndPrice);

//Total cost of items in cart
let grand= cart.reduce((acc, item) => acc + item.price*item.quantity,0);
console.log("Grand Total: " + grand);

//Find Mouse item
let mouse = cart.find(item => item.name === "Mouse");
console.log("Find Mouse: ", mouse);

//Index of Keyboard item
let keyboardIndex = cart.findIndex(m => m.name === "Keyboard");
console.log("Index of Keyboard: " + keyboardIndex);


console.log("--------------------------------------------------");


//2nd Assignment
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];


//Passing marks
let pass = students.filter(s => s.marks >=40);
console.log("Passing marks: ", pass);

//Assign grades
let grade = students.map(s => {
    let grade;
    if(s.marks>=90)  grade= 'A';
    else if(s.marks>=75) grade= 'B';
    else if(s.marks>=60) grade= 'C';
    else grade= 'D';
    s.grade= grade;
    return s;
})
console.log("Grades: " , grade);

//Average marks
let avg= students.reduce((acc,s) => acc+ s.marks,0) / students.length;
console.log("Average Marks: " , avg);

//Find student with 92 marks
let fin = students.find(s => s.marks ===92);
console.log("Student with 92 marks: " , fin);

//Index of Kiran
let ind = students.findIndex(s => s.name=== "Kiran");
console.log("Index of Kiran: " + ind);

console.log("--------------------------------------------------");
//3rd Assignment

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//filter IT department employees
let it= employees.filter(e => e.department ==="IT");
console.log("Employees in IT department: ", it);

//Calculate net salary with 10% bonus
let net = employees.map(e => e.netsalary=e.salary + (e.salary * 0.1));
console.log("Net salaries with 10% bonus: ", net);

//Total salary expense
let tot= employees.reduce((acc, e) => acc+ e.salary, 0);
console.log("Total salary expense: " , tot);

//Find employee with 30000 salary
let finsal = employees.find(e => e.salary === 30000);
console.log("Employee with 30000 salary: " , finsal);

//Index of Neha
let indemp = employees.findIndex(e => e.name === "Neha");
console.log("Index of Neha: " + indemp);

console.log("--------------------------------------------------");

//4th Assignment

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//filter Sci-Fi movies
let filsci= movies.filter(m => m.genre ==="Sci-Fi");
console.log("Movies in Sci-Fi genre: ", filsci);

//map to return inception(8.8)
let inception = movies.map(m => m.title === "Inception" ? `${m.title}(${m.rating})` : null)[0];
console.log("Inception Rating: ", inception);

//Total rating of all movies
let avgrat = movies.reduce((acc,m) => acc+m.rating,0)/4
console.log("Average rating of all movies: " , avgrat);

//Find movie Joker
let jok = movies.find(m => m.title ==="Joker")
console.log("Finding movie Joker: " , jok);

//Index of Avengers
let indav = movies.findIndex(m => m.title === "Avengers");
console.log("Index of Avengers: " + indav);

console.log("--------------------------------------------------");

//5th Assignment

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//filter credit transactions
let credit = transactions.filter(t => t.type ==="credit");
console.log("Credit Transactions: ", credit);

//map to return amounts
let amount = transactions.map(m=> m.amount);
console.log("Transaction Amounts: ", amount);

//Final balance calculation
let finalbal = transactions.reduce((acc,t) => t.type==="credit" ? acc +t.amount : acc-t.amount, 0);
console.log("Final Balance: " , finalbal);

//Find first debit transaction
let firstdeb= transactions.find(t => t.type==="debit");
console.log("First Debit transaction: " , firstdeb);

//Index of transaction with amount 10000
let amt100 = transactions.findIndex(t => t.amount===10000);
console.log("Index of transaction with amount 10000: " + amt100);

console.log("--------------------------------------------------");