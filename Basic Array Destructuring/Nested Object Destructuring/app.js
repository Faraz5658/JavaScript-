const user = {
  myname: "BANGASH",
  address: {
    city: "KOHAT",
    zip: "26000"
  }
};

const { address: { city } } = user;
console.log(city);
