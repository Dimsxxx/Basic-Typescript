// const user = {
//   name: "Dimas",
//   email: "Dimas.wanty@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "Dimas", isPaid: false, email: "dimas.wanty@gmail.com" };

// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "Sigit", price: 399 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetail?: number;
};

let myUser = {
  _id: 12345,
  name: "dimas eka",
  email: "d.wanty@gmail.com",
  isActive: false,
};

myUser.email = "dimas.wanty@gmail.com";

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export {};
