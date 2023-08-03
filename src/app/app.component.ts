import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title = "sharing Data"

   currentName = "Devon Conaway"

   users = ['Tauheed Patel', 'Tim Johng Yun', 'Robert Downy Jr']

   addUser(user:any){
    this.users.push(user)
   }

   user = {
    name : 'John Wick',
    age : 56,
    country : 'India'
   }
  
   ngOnInit(): void {
     
   }
}
