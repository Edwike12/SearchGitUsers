import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,} from '@angular/common/http';
import {map} from 'rxjs/operators/';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private  username= 'string';
  private clientid= 'f8abf511a4cc8a44de6c';
  private clientsecret='70a87a21221fead4884624f8fafe9e478d555686';

  constructor(private http:HttpClient) {
    console.log("services is now ready");
    this.username = 'Edwike12';
   }

   getProfileInfo (){
    return this.http.get("https://api.github.com/users/"+ this.username + "/repos?client_id="+ this.clientid +"&client_secret=" +this.clientsecret)
    .pipe(
      map((res:Response)=> { return this.getProfileInfo()}));
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/"+ this.username + "?client_id="+ this.clientid +"&client_secret=" +this.clientsecret)
    .pipe(
      map((res:Response)=> { return this.getProfileRepos()}));
  }
}
