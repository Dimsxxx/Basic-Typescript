function addTwo(num: number) {
  return num + 2;
}

function getUpper(val) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5);
getUpper(4);
signUpUser("Dimas", "dimas@gmail.com", false);
loginUser("d", "d@gmail.com");

// function getValue(myValue: number): boolean{
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};
const heroes = ["Dimas", "Eka", "Priyadi"];
// const heroes = [1, 2, 3];
heroes.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void{
    console.log(errmsg);
    
}

function handleError(errmsg: string): void{
    console.log(errmsg);
    
}

export {};
