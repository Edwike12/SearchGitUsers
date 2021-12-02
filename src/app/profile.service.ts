import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private  username= 'string';
  private repo!:string;
  private MainUrl=environment.userUrl;
  private tokens = environment.accessToken

  constructor(private http:HttpClient) {
    console.log("services is now ready");
    this.username = 'Edwike12';
   }

   getProfileInfo (){
    return this.http.get<any[]>(`${this.MainUrl}${this.username}??access_token=+${this.tokens}`).toPromise()
  }

  getProfileRepos(){
    return this.http.get<any[]>(`${this.MainUrl}${this.username}??access_token=+${this.tokens}`).toPromise()
  }

  updateProfile(username:string){
    this.username;username;
  }


  updateRepos(repo:string){
    return this.repo =repo;
  }

}
