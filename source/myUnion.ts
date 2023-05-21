let score: number | string | boolean = 33;

score = 44;

score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = { name: "Dimas", id: 445 };

hitesh = { username: "hc", id: 334 };

function getDbId(id: number | string) {
    //making api calls
    if(typeof id === "string"){
        id.toLowerCase()
    }
    id.
}

getDbId(3)

getDbId("5")
