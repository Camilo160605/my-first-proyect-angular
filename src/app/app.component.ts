import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Camilo';
  age = 18;
  image = 'https://pm1.aminoapps.com/8400/e6a76dbfe958332ff258a76be65fb0e35cb7c51ar1-800-999v2_uhq.jpg';
  btnDisabled = true;
  btnDisabled2 = true;
  person = {
    name: 'Camilo',
    age: 18,
    avatar: 'https://pm1.aminoapps.com/8400/e6a76dbfe958332ff258a76be65fb0e35cb7c51ar1-800-999v2_uhq.jpg',
    //gif: 'https://www.youtube.com/shorts/7oHUGwlktz8',
  }
  thing = {
    thing: ''
  }

  names: String [] = ['Camilo', 'Julian', 'Rogelio', 'Maria'];
  newName = '';
  things: String [] = ["R1M", "BMW M3 COMPETITION","CASA GRANDE"];
  newThing = '';

  register = {
    name : '',
    email : '',
    password: '',
  }
  formStyle = {
    font: 'Verdana',
    background: 'whitesmoke',
    width: 250,
    padding: 10,
    radius: 10,
    shadow: '5 5 15px'
  }

  box = {
    width: 100,
    height: 100,
    background: 'red'
  }
  products : Product[] = [{
    name: "Bicicleta",
    price: 165000,
    image: "./assets/images/Bicicleta.jpg",
    category: "Transporte",
  },
  {
    name: "Bumblebee",
    price: 170000,
    image: "./assets/images/Bumblebee.jpg",
    category: "Juguete",
  },
  {
    name: "Spider-Man",
    price: 80000,
    image: "./assets/images/Spiterman.jpeg",
    category: "Disfraz",
  },
  {
    name: "Switch",
    price: 2550000,
    image: "./assets/images/suich.jpg",
    category: "Electronica",
  },{
    name: "Pagani Juguete",
    price: 200000,
    image: "./assets/images/JUGUETE-PAGANI.jpg"
  },{
    name: "Juguete GTR34",
    price: 250000,
    image: "./assets/images/GTR34-JUGUETE.jpg"
  }];
  input: any;

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event : Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event : Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName(){
    this.names.push(this.newName);
    this.newName= '';
  }
  deleteName(index : number){
    this.names.splice(index, 1);
  }
  addThing(){
    this.things.push(this.newThing);
    this.newThing='';
  }
  deleteThing(index : number){
    this.things.splice(index,1);
  }

  onRegister(){
    console.log(this.register);
  }
}
