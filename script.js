// let car = {
//     Model: " i4 drive",
//     Year: 2024,
//     Color: black,
//     Mark: BMW,
//     Battery_capacity:84 ,
//     Power_reserve: 590 ,
//     Acceleration_to_hundreds: 5.7 ,
//     Horse_power: 410,
//     MileAge: 15,
//     State:acceleration_to_hundreds,
//     Details: {
//         Tunings: false,
//         Tunings: false,
//         Hatch: true,
//         Sit_airflow: true,
//         Sit_heating: true,
//         Lane_keeping: true,
//         Airbags: 10,
//     }
// }

// let user = {
//     name: "Amal",
//     surName: "truev",
//     age: 29,
//     wifes: ['Nargiza', 'Amina', 'Amalya', 'Shoxruxa'],
//     wisas: ['USA', 'Ukrain', 'Russia', 'Mexico'],
//     polniImya: function() {
//         return this.name + ' ' + this.surName
//     }
// }

// let passport = {
//     serries: "AC",
//     number: 213123123,
//     date: "2019-06-06",
//     exp: "2029-06-06",
// }

// let types = {
//     string: [],
//     number: [],
//     object: [],
//     boolean: [],
//     function: []
// }

// TZ
// Соеденить два объекта в одно целое (новый объект)
// Получить все ключи из нового объекта и сохранить их в новую переменную
// Получить все значения из нового объекта и сохранить их в новую переменную
// Соеденить две этих массива (ключи и значения)
// Отфильтровать массив по их типам элементов

//1
// let new_obj = { ...user, ...passport};
// console.log(new_obj);

//2
// let new_obj = { ...user, ...passport};
// let new_keys = Object.keys(new_obj);
// console.log(new_keys);


//3
// let new_obj = { ...user, ...passport};
// let new_valu = Object.values(new_obj);
// console.log(new_valu);


//4
// let all_information = Object.entries(user).concat(Object.entries(passport));
// console.log(all_information);

//5

// mergedArray.forEach(([key, value]) => {
//     if (typeof value === 'string') {
//         types.string.push({ [key]: value });
//     } else if (typeof value === 'number') {
//         types.number.push({ [key]: value });
//     } else if (typeof value === 'object') {
//         types.object.push({ [key]: value });
//     } else if (typeof value === 'boolean') {
//         types.boolean.push({ [key]: value });
//     } else if (typeof value === 'function') {
//         types.function.push({ [key]: value });
//     }
// });

// console.log(types);
// let connect = Object.assign({}, user, {passport})

// let keys = Object.keys(connect)
// let values = Object.values(connect)
// let endConnect = [...keys, ...values]




// endConnect.filter((elem) => {
//     let ferfero = typeof(elem)
//     if (types[ferfero]) {
//         types[ferfero].push(elem)
//     }
// })


// console.log(types);














// Раскидать людей в разные массивы в зависимости от их почты
// let users = [
//     {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets"
//         }
//     },
//     {
//         id: 2,
//         name: "Ervin Howell",
//         username: "Antonette",
//         email: "Shanna@melissa.tv",
//         addres: {
//         street: "Victor Plains",
//         suite: "Suite 879",
//         city: "Wisokyburgh",
//         zipcode: "90566-7771",
//         geo: {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         phone: "010-692-6593 x09125",
//         website: "anastasia.net",
//         company: {
//         name: "Deckow-Crist",
//         catchPhrase: "Proactive didactic contingency",
//         bs: "synergize scalable supply-chains"
//         }
//     },
//     {
//         id: 3,
//         name: "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//                 "lat": "29.4572",
//                 "lng": "-164.2990"
//             }
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//         }
//     },
//     {
//         "id": 5,
//         "name": "Chelsey Dietrich",
//         "username": "Kamren",
//         "email": "Lucio_Hettinger@annie.ca",
//         "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//             "geo": {
//                 "lat": "-31.8129",
//                 "lng": "62.5342"
//             }
//         },
//         "phone": "(254)954-1289",
//         "website": "demarco.info",
//         "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//         }
//     },
//     {
//         "id": 6,
//         "name": "Mrs. Dennis Schulist",
//         "username": "Leopoldo_Corkery",
//         "email": "Karley_Dach@jasper.info",
//         "address": {
//             "street": "Norberto Crossing",
//             "suite": "Apt. 950",
//             "city": "South Christy",
//             "zipcode": "23505-1337",
//             "geo": {
//                 "lat": "-71.4197",
//                 "lng": "71.7478"
//             }
//         },
//         "phone": "1-477-935-8478 x6430",
//         "website": "ola.org",
//         "company": {
//             "name": "Considine-Lockman",
//             "catchPhrase": "Synchronised bottom-line interface",
//             "bs": "e-enable innovative applications"
//         }
//     },
//     {
//         "id": 7,
//         "name": "Kurtis Weissnat",
//         "username": "Elwyn.Skiles",
//         "email": "Telly.Hoeger@billy.biz",
//         "address": {
//             "street": "Rex Trail",
//             "suite": "Suite 280",
//             "city": "Howemouth",
//             "zipcode": "58804-1099",
//             "geo": {
//                 "lat": "24.8918",
//                 "lng": "21.8984"
//             }
//         },
//         "phone": "210.067.6132",
//         "website": "elvis.io",
//         "company": {
//             "name": "Johns Group",
//             "catchPhrase": "Configurable multimedia task-force",
//             "bs": "generate enterprise e-tailers"
//         }
//     },
//     {
//         "id": 8,
//         "name": "Nicholas Runolfsdottir V",
//         "username": "Maxime_Nienow",
//         "email": "Sherwood@rosamond.me",
//         "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//                 "lat": "-14.3990",
//                 "lng": "-120.7677"
//             }
//         },
//         "phone": "586.493.6943 x140",
//         "website": "jacynthe.com",
//         "company": {
//             "name": "Abernathy Group",
//             "catchPhrase": "Implemented secondary concept",
//             "bs": "e-enable extensible e-tailers"
//         }
//     },
//     {
//         "id": 9,
//         "name": "Glenna Reichert",
//         "username": "Delphine",
//         "email": "Chaim_McDermott@dana.io",
//         "address": {
//             "street": "Dayna Park",
//             "suite": "Suite 449",
//             "city": "Bartholomebury",
//             "zipcode": "76495-3109",
//             "geo": {
//                 "lat": "24.6463",
//                 "lng": "-168.8889"
//             }
//         },
//         "phone": "(775)976-6794 x41206",
//         "website": "conrad.com",
//         "company": {
//             "name": "Yost and Sons",
//             "catchPhrase": "Switchable contextually-based project",
//             "bs": "aggregate real-time technologies"
//         }
//     },
//     {
//         "id": 10,
//         "name": "Clementina DuBuque",
//         "username": "Moriah.Stanton",
//         "email": "Rey.Padberg@karina.biz",
//         "address": {
//             "street": "Kattie Turnpike",
//             "suite": "Suite 198",
//             "city": "Lebsackbury",
//             "zipcode": "31428-2261",
//             "geo": {
//                 "lat": "-38.2386",
//                 "lng": "57.2232"
//             }
//         },
//         "phone": "024-648-3804",
//         "website": "ambrose.net",
//         "company": {
//             "name": "Hoeger LLC",
//             "catchPhrase": "Centralized empowering task-force",
//             "bs": "target end-to-end models"
//         }
//     }
// ]
// let emails = {
//     org: [],
//     net: [],
//     info: []
// }
// let other = []
// users.forEach (user => {
//     const email_new = user.email.split('@')[1];
//     if (email_new === 'biz'){
//         emails.org.push(user);
//     }else if (email_new === 'net'){
//         emails.net.push(user);
//     }else if (email_new === 'info'){
//         emails.info.push(user);
//     }else {
//         other.push(user)
//     }
// })
// console.log(emails);
let car = {
  brand: "BMw",
  model: "X7",
  year: 2023,
  color: "black",
  start() {
    console.log("Двигатель автомобиля запущен.");
  },
  stop() {
    console.log("Двигатель автомобиля остановлен.");
  }
};

let person = {
  name: "Farrukh",
  age: 30,
  license: false,
  drive(carObj) {
    if (this.license) {
      console.log(`Началась поездка на автомобиле ${carObj.brand} ${carObj.model}.`);
    } else {
      console.log("У водителя нет прав на вождение.");
    }
  },
  park() {
    console.log("Автомобиль успешно припаркован.");
  }
};


console.log(`Автомобиль: Марка: ${car.brand}, Модель: ${car.model}, Год: ${car.year}, Цвет: ${car.color}`);
console.log(`Водитель: Имя: ${person.name}, Возраст: ${person.age}, Права: ${person.license ? 'есть' : 'нет'}`);

car.start();
person.drive(car);
car.stop();
person.park();


