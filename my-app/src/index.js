
///let kan niet buiten de for loop gepakt worden
///const kan wel gepakt worden buiten de for loop
// function sayHello(){
//     for(let i=0; i<5; i++){
//         console.log(i);
//     }
// }
//
// sayHello();



// const person = { //object
//   name: "Dylan",
//   walk: function() { //method
//     console.log(this);
//   }
// };

////// walk is nu de function uit const person walk
// const walk = person.walk;
// console.log(walk);

// const walk = person.walk.bind(person);
// walk();



//normal version
// const squere = function(number) {
//   return number * number;
// }

///arrow function //shorter and cleaner
// const squere = (number) => number * number;
// console.log(squere(5)); //function squere called



// array jobs
// const jobs = [
//   {id:  1, isActive: true},
//   {id:  2, isActive: true},
//   {id:  3, isActive: false},
// ];

//normal function
// const activeJobs = jobs.filter(function(job) {return job.isActive;})

//arrow function shorter
// const activeJobs = jobs.filter((job) => job.isActive);
// console.log(jobs);//returns all jobs
// console.log(activeJobs);//returns only the isActive jobs



// const person = {/// person object
//   talk() {
//     setTimeout(() => {/////moet arrow key zijn omanders kan die niet bij de person object
//       console.log('this', this);
//     }, 1000);//dekay van 1000 milli sec dus 1 sec
//   }
// };
//
// person.talk();



// const colors = ['red','green','blue'];
//arrow function in een map //map doet het iedere keer voor iedere slot in een array dus nu 3 keer
// const items = colors.map(color => `<li>${color}</li>`); // ${} zorgt er voor dat je niet dit hoeft te doen '' + color + ''  en er moet `` worden gebruikt
// console.log(items); //calls const items



const addres = {
  street: '',
  city: '',
  country: ''
};

//foute manier
// const street = address.street;
// const city = address.city;
// const country = address.country;

//goede manier
// const { street,city,country} = address;



// const first = [1,2,3];
// const second = [4,5,6];

//deze functions doen beide het zelfde maar de 2 is het best ook als je nog meer dingen wilt
// const combined = first.concat(second);
// const combined  = [...first,...second];///... = spread gets all of the values of the array after it

// const clone = [...first]; //clone  = first array nu om dat die alle values uit de first pakt



const first = {name: 'Dylan'};
const second = {job:'Student'};

const combined = {...first, ...second,location : 'Netherlands'};
console.log(combined);
