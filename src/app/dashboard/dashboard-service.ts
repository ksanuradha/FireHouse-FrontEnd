import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {
  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get<any[]>("http://localhost:8083/api/v1/bookMark/getAll");
  }

  public findAllatLoading() {
    return this.http.get<any[]>("http://localhost:8083/api/v1/bookMark/getAllBookMarks");
  }

  public deleteBookMarka(id: number) {
    return this.http.delete<any>("http://localhost:8083/api/v1/bookMark/delete-BookMarks/" + id);

  }

}

//http://demo.dreamsquadgroup.com/test/index.json
