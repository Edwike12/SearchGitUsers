import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any[string];
  repos:any[string];
  username:string;

  constructor(private Services:ProfileService ) { 
    this.Services.getProfileInfo().subscribe(profile=> {
      console.log(profile);
      this.profile = profile;
    });    
   
  }

  ngOnInit(): void {
  }

}
