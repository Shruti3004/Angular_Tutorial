import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Shruti Agarwal';
  currentVal="";
  disabledBox=true;
  // name = "Sh"
  // getName(){
  //   return this.name;
  // }
  // obj={
  //   name: 'peter',
  //   age: 20
  // } 
  // getHello(){
  //   alert('hy')
  // }
  // arr=['bruce', 'peter', 'anil'];
  // a=100;
  // b=100;
  // siteUrl=window.location.href;  
  // myEvent(evt: any){
  //   console.log(evt);
  // }
  // getVal(val: any){
  //   console.log(val);
  //   this.currentVal = val;
  // }
  // enableTextBox(){
  //   this.disabledBox=false ;
  // }
  // show=false
  // show='yes'
  // show="blue";
  // color="green";
  // data=['shruti', 'agarwal', 'is', 'the','best']
  data=[
    {
      name: 'Shruti',
      age:25
    },
    {
      name: 'Peter',
      age:34
    },
    {
      name: 'Bruce',
      age:39
    },
    {
      name: 'Sam',
      age:34
    }
  ]
  // getUserValue(value: any){
  //   console.log(value)
  // }
  // color="orange";
  // err=true;
  // updateColor(){
  //   this.color="blue"
  // }
  // data="xyz"
}
