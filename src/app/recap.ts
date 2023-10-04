const username: string | number = 'CamiloDev';

const sum = (a: number, b: number) =>{
  return a+b;
}
sum(1,4);
class person{
  constructor(private age: number, public lastname: string){}
}
const nico= new person(18,'Vargas');
