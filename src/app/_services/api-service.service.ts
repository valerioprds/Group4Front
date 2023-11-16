import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameData, GetApiResp, PostApiResp } from '@app/_interfaces/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl: string = 'https://backend-agua.azurewebsites.net/api/v1/summary/1';
  userTotalWaterUsage = new BehaviorSubject<number>(0); // setting initial value
  constructor(
    private http: HttpClient,
  ) { }


  gameInfoObject: GameData = {
    activity: '',
    time: "string",
    user: 1,
    name: "Marco",
    consumption: 0,
  }

  createApiJsonObject(activity: string, consumption:number ): GameData {
    this.gameInfoObject.activity = activity;
    this.gameInfoObject.consumption = consumption;

    return this.gameInfoObject;
  }

  sendGameData(gameData: GameData): Observable<PostApiResp>{
    return this.http.post<PostApiResp>(`${this.baseUrl}`, gameData );
  }

  getUser(): Observable<GetApiResp>{
    return this.http.get<GetApiResp>(`${this.baseUrl}`);
  }

  getUserData(){
    this.getUser()
    .subscribe( (resp) => this.userTotalWaterUsage.next(resp.average_consumption));
  }
}




