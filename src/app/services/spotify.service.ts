import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor(private http:HttpClient) { }
  
  getQuery(query:string){
  const url = `	https://api.spotify.com/v1/${query}`;
  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQAH1VICk7RJ0wn0Ur95-9Yxt4xotk5ERKDSuxUCFF5pQ-f_iJN0xF2E2xG_uKaMXp3Fzd-AAxg-YhCUEVI',

  });
  return this.http.get(url,{headers});
  }
  getNewReleases(){
   
    return this.getQuery('browse/new-releases?limit=50').pipe(map(data=>{return data['albums'].items;
  }))
  }

  getArtist(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=10`).pipe(map(data=>{return data['artists'].items;
  }));
  }
}
