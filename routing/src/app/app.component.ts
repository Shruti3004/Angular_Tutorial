import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UsersDataService } from './users-data.service';
import {UsersServiceService} from'./users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'routing';
  name  =  '';
  data : any = [];
  // constructor(private user: UsersDataService) {
  //   console.log(this.user.getData);
  //   let data=this.user.getData();
  //   this.name=data.name;
  // }
  constructor(private user:UsersServiceService){
    this.user.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }
}
