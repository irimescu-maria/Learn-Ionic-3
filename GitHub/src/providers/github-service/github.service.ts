import { Http, Response } from "@angular/http";
import { Injectable } from '@angular/core';

import { User } from '../../models/user.interface';
import { USER_LIST } from "../../mocks/user.mocks";
import { Repository } from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  private baseUrl: string = "https://api.github.com/users";
  private reposUrl: string = "repos";

  constructor(private http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  //Get user information using GitHub api instead of mocking user
  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
      // display the data before mapping
      .do(this.logData)
      .map(this.extractData)
      // dispaly the data after mapping
      .do(this.logData)
      .catch((error: Response) => Observable.throw(error.json().error || "Server error"))
  }

  //Get user repository using GitHub api
  getRepositoryInformation(username: string): Observable<Repository[]>
  {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
              .do(this.logData)
              .map(this.extractData)
              //display the data after mapping
              .do(this.logData)
              .catch(this.handleError)
  }

  mockGerRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(
      repository => repository.owner.name === username));
  }

  mockGetUserInformation(username: string): Observable<User> {
    //create a new Observable of this values
    //I'm gonna filter the USER_LIST based on a particular parameter
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

  //Nobody can access these classes outside this class
  private logData(response: Response)
  {
    console.log(response);
  }
  private extractData(response: Response)
  {
    return response.json();
  }
  private handleError(error: Response | any)
  {
    return Observable.throw(error.json().error || "Server error");
  }
}
