import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public users : any;

  constructor(private service : UsersService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      data => {
        console.log(data);
        this.users = data;
      }
    );
  }



}
