import { Person } from './person';

// export function promote() {}

export default class Teacher extends Person{
  constructor(name,degree){
    super(name);//gaat naar de parent dus Person class
    this.degree = degree;
  }
  teach(){
    console.log("teach");
  }
}
