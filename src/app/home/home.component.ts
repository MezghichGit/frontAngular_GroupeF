import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  university: string = "Sesame";
  alertColor: string = "alert alert-danger";
  defaultNom :string = "Your name";

  cours: string[] = ["Java", "C++", "Android", "Spring", "Angular"];
  constructor() {
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  welcome() {
    alert("Hello from home.ts");
  }

  changeColorAlert() {
    if (this.alertColor == "alert alert-danger")
      this.alertColor = "alert alert-primary";
    else
      this.alertColor = "alert alert-danger";
  }

}
