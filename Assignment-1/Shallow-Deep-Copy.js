const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en",
  },
};

//shallow copy
const shallow = { ...user };
shallow.name = "Vira";
shallow.preferences.theme = "light";

console.log(user);
console.log(shallow);

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

//deep copy
const deep = structuredClone(order);

deep.customer.address.city = "Chennai";
deep.items[0].price = 65000;

console.log(order);
console.log(deep);