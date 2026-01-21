//Task-1: Shallow Copy
const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en",
  },
};

//shallow copy of user
const shallow = { ...user };

//change name and theme of copied object
shallow.name = "Vira";
shallow.preferences.theme = "light";

console.log(user);
console.log(shallow);

//Task 2: Deep Copy
const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085,
    },
  },
  items: [{ product: "Laptop", price: 70000 }],
};

//deep copy of order
const deep = structuredClone(order);

//change city and items[0]
deep.customer.address.city = "Chennai";
deep.items[0].price = 65000;

console.log(order);
console.log(deep);