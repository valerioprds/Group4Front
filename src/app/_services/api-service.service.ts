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
  totalWaterUsage: number = 0;
  constructor(
    private http: HttpClient,
  ) { }


  gameInfoObject: GameData = {
    activity: '',
    time: Date(),
    user: 1,
    name: "Marco",
    consumption: 0,
  }

  createApiJsonObject(activity: string, consumption:number ): GameData {
    this.gameInfoObject.activity = activity;
    this.gameInfoObject.consumption = consumption;
    this.gameInfoObject.time= Date();

    return this.gameInfoObject;
  }

  sendGameData(gameData: GameData): Observable<PostApiResp>{
    return this.http.post<PostApiResp>(`${this.baseUrl}`, gameData, {
      headers:{  'Content-Type': 'application/json'}
    });
  }

  getUser(): Observable<GetApiResp>{
    return this.http.get<GetApiResp>(`${this.baseUrl}`);
  }

  getUserData(){
    this.getUser()
    .subscribe( (resp) => { this.userTotalWaterUsage.next(resp.averageConsumption), this.totalWaterUsage = resp.totalConsumption});
  }
}




