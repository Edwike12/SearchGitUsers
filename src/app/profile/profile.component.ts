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
  username:string =''

  constructor(private Services:ProfileService ) { 
    
              
  }

  findProfile(){
    this.Services.updateProfile(this.username);
    this.Services. getProfileInfo();
    this.Services. getProfileRepos().then( repos => {
      this.repos = repos;
    });
  }
  ngOnInit(): void {
 
  }

}
