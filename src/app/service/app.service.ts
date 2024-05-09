import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private http = inject(HttpClient)

  getAllUsers(): any {
    this.http.get("../assets/json/users.json").pipe(
      map(data => console.log(data))
    )
  }

}
